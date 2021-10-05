import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import { ListWrapper, List, Loading } from './UsersList.style';
import User from './User';
import Modal from './Modal';

const UsersList = () => {
  // Hooks
  // -- state
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  // -- side effects
  useEffect(() => {
    const getUsers = async () => {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      setUsers(data.data);
      setIsLoading(false);
    };

    getUsers();
  }, []);

  // Custom funtions
  const openModal = (e) => {
    const id = e.target.dataset.id;
    setUser(users.filter((user) => user.id === +id)[0]);

    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  const createUser = () => (
    <ul>
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.phone}</li>
      <li>{user.address.city}</li>
    </ul>
  );

  return (
    <>
      <ListWrapper>
        {isLoading ? (
          <Loading>Loading...</Loading>
        ) : (
          <List>
            {users.map((user) => (
              <User
                name={user.name}
                userID={user.id}
                action={openModal}
                key={user.id}
              />
            ))}
          </List>
        )}
      </ListWrapper>
      {isOpen && <Modal action={closeModal}>{createUser()}</Modal>}
    </>
  );
};

export default UsersList;
