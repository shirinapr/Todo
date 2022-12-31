import React, { useState } from 'react';

import Button from '../Button';
import DoneTasks from '../Modals/doneTasks';

const Header = () => {
  const [modalopen, setModalopen] = useState(false);

  const closeModal = () => {
    setModalopen(false);
  };

  return (
    <div className="center py-4 shadow-md">
      <Button
        type="primary"
        content="VIEW DONE TASKS"
        onClick={() => setModalopen(true)}
        className="bg-green-700 hover:bg-green-800 absolute lg:left-[150px] left-3 lg:w-[170px] w-[110px] text-[12px] lg:text-base center"
      />
      <p className="lg:text-2xl text-lg">Todo App</p>

      <DoneTasks openModal={modalopen} closeModal={closeModal} />
    </div>
  );
};

export default Header;
