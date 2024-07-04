import { useState, useEffect } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    // Fetch users from the backend API
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // Replace with your API endpoint
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleAddUser = async () => {
    // Replace with your API endpoint
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    setNewUser({ name: '', email: '', password: '' });
    fetchUsers();
  };

  const handleDeleteUser = async () => {
    // Replace with your API endpoint
    await fetch(`/api/users/`, { method: 'DELETE' });
    fetchUsers();
  };

    setEditUser(null);
    fetchUsers();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="w-full flex-1 px-20 text-center">
        <h1 className="text-2xl font-bold mb-6">Admin Page</h1>
        <div className="bg-white rounded-lg shadow-md p-10 mb-6">
          <h2 className="text-xl font-bold mb-4">Add New User</h2>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddUser}
          >
            Add User
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-10">
          <h2 className="text-xl font-bold mb-4">User List</h2>
          <ul>
              <li key={} className="mb-4 flex justify-between items-center">
               
                <div>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                   
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    
                  >
                    Delete
                  </button>
                </div>
              </li>
            
          </ul>
        </div>

        {editUser && (
          <div className="bg-white rounded-lg shadow-md p-10 mt-6">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
              type="text"
              placeholder="Name"
              
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
              type="email"
              placeholder="Email"
            
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
              type="password"
              placeholder="Password"
        
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleUpdateUser}
            >
              Update User
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
export default Admin;
