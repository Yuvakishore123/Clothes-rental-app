import React, {useState} from 'react';
import {Alert} from 'react-native';
function Useadditems() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [eventType, setEventType] = useState('');
  const [outfitType, setOutfitType] = useState('');
  const [itemType, setItemType] = useState('');
  const handleGenderChange = (selectedGender: React.SetStateAction<string>) => {
    setGender(selectedGender);
  };
  const handleEventTypeChange = (
    selectedEventType: React.SetStateAction<string>,
  ) => {
    setEventType(selectedEventType);
  };

  const handleOutfitChange = (selectedOutfit: React.SetStateAction<string>) => {
    setOutfitType(selectedOutfit);
  };

  const handleItemTypeChange = (
    selectedItemType: React.SetStateAction<string>,
  ) => {
    setItemType(selectedItemType);
  };
  const handleItems = async () => {
    try {
      const response = await fetch(
        'https://64343e5f582420e231779819.mockapi.io/productspost',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            description: description,
            gender: gender,
            eventType: eventType,
            outfitType: outfitType,
            itemType: itemType,
          }),
        },
      );

      if (response.ok) {
        Alert.alert('sucessfully submitted');
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    name,
    description,
    setGender,
    setEventType,
    setOutfitType,
    setItemType,
    handleGenderChange,
    handleEventTypeChange,
    handleOutfitChange,
    handleItemTypeChange,
    handleItems,
    setName,
    setDescription,
  };
}
export default Useadditems;
