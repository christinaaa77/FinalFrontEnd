import { getDatabase, ref, onValue } from 'firebase/database';
import { database } from './firebase'; // Adjust the import path based on your project structure

// Function to fetch all data
export const ambilData = () => {
  const dbRef = ref(database, 'makanan');

  return new Promise((resolve, reject) => {
    onValue(dbRef, (snapshot) => {
      try {
        if (snapshot && snapshot.exists()) {
          // Extract an array of objects from the snapshot
          const dataArray = Object.entries(snapshot.val()).map(([key, value]) => ({ id: key, ...value }));
          resolve(dataArray);
        } else {
          console.warn('Data not found.');
          resolve([]);
        }
      } catch (error) {
        console.error('Error parsing data:', error);
        reject(error);
      }
    }, (error) => {
      console.error('Error fetching data:', error);
      reject(error);
    });
  });
};


// Function to add new data
export const tambahData = async (data) => {
  try {
    const dbRef = ref(database, 'makanan');
    const newDataRef = push(dbRef);
    await update(newDataRef, data);
  } catch (error) {
    console.error('Error adding data:', error);
    throw error;
  }
};

// Function to update existing data
export const updateData = async (id, newData) => {
  try {
    const dbRef = ref(database, `makanan/${id}`);
    await update(dbRef, newData);
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// Function to delete data
export const hapusData = async (id) => {
  try {
    const dbRef = ref(database, `makanan/${id}`);
    await remove(dbRef);
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
