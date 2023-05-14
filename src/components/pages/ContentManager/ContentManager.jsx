import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// Internal Data
import Post from './Posts';
import { Posts } from '../../../Data/Post';
import { useState } from 'react';

const ContentManager = () => {
  const [open, setOpen] = React.useState(false);
  const [modalId, setModalId] = useState(null);
  const handleModalInfo = (id) => {
    setModalId(id);
  };
  return (
    <section className="pt-16 pl-[7rem]">
      {/* <TopLines right="-right-36" /> */}
      <h1 className="font-bold text-[2.5rem] leading-10">Content Manager</h1>
      <div className="flex gap-12 items-center pt-12">
        <div>
          <p className="text-right text-green text-base font-bold pb-2">
            Approve All
          </p>
          <div className="flex flex-col">
            
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between pb-2">
            <h1 className="text-violet font-semibold text-3xl">
              Pending Posts
            </h1>
            <p className="text-red text-base font-bold">Delete All</p>
          </div>
          <div className="flex flex-col">
            {Posts.map((post) => {
              console.log(post);
              const { id } = post;
              return (
                <div key={id} className="mb-4" >
                  <Post key={id} {...post} />
                </div>
              );
            })}

            <div>
              <Button onClick={toggleModal}>Open modal</Button>
              <Modal
                open={open}
                onClose={toggleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentManager;
