# QuickList - Capstone Project

## Overview

QuickList is a grocery shopping list platform designed to improve the shopping experience by organizing items based on their location in the store. The app allows users to navigate the store efficently and serves as a check-off list for completed purchases.

### Problem Space

Manually creating a grocery list and navigating the store without organization is time-consuming and inefficient. QuickList addresses this by automating the organization of items and reducing the time spent moving back and forth between aisles.

### User Profile

Target : Average grocery shoppers looking for a quicker and smoother experience.
Usage: Users will interact with QuickList in 2 stages. 
- At Home to input and save grocery list items.
- In-Store to navigate the store and check off items as they are picked up.
Device: Mobile phones for ease of use on-the-go.

### Features

- Create, Edit, and Save Lists: Users can maintain one or more grocery lists.
- Organized View: Saved lists are organized by aisle and location within the store.
- Check-Off Functionality: Users can mark items as picked up while shopping.
- Aisle Overview: A comprehensive view of all aisles and their respective items.

## Implementation

### Tech Stack

- HTML
- SASS/CSS
- Javascript
- React
- Express
- MySQL
- Github

### APIs

An external API will be created to manage information about grocery store items and their aisle locations.

### Sitemap

Home Page - where user can find saved grocery lists.
Grocery List Page - where user can add, edit and cross-off items pucked up.
Store Setup Page - where user can find information on all the aisles and locations.

### Mockups

https://www.figma.com/design/3tpe2vbCNtAoDmmBH0Df8A/Capstone-Project?node-id=0-1&t=wuhgAQgEFcmj8GtG-1 

### Data

- Store -> Aisles: one-to-many
- Aisle -> Items: one-to-many
- Itmes -> each item belongs to one aisle 

### Endpoints

GET / storeList example

  {
    "id": 123,
    "aisleNumber": 1,
    "aisleName": "Fruits and Vegetables",
    "itemName": "Apple"
  },
  {
    "id": 124,
    "aisleNumber": 1,
    "aisleName": "Fruits and Vegetables",
    "itemName": "Potatoes"
  }


GET / grocerylist
POST / grocerylist

{
  "list_name": "Weekend Camping Trip",
  "items": 
  [
    {
      "item_name": "Marshmallows",
    },
    {
      "item_name": "Hot Dogs",
    }
  ]
}


PUT / grocerylist/:id

{
  "list_name": "Weekend Camping Trip",
  "items": [
    {
      "item_name": "Marshmallows",
    },
    {
      "item_name": "Hot Dogs",
    },
{
    “Item_name”: “Ketchup”,
}
  ]
}


DELETE / grocerylist/:id



## Roadmap

- Build out the static pages and routes 
- Develop the core layout and navigation
- Implement list creation, editing and saving.
- Add functionality for organizing list by aisle
- Connect frontend with backend API


---

## Future Implementations
- User Authentication: Add login functionality to allow users to save lists to their accounts.
- Store-Specific Data: Enable users to select their store for tailored aisle layouts
