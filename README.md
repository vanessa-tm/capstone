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
- Node.js
- MySQL
- Github

### APIs

An external API was developed to manage information about grocery store items and their corresponding aisle locations, while another API was designed to handle user-specific saved lists.

### Sitemap

- Home Page: Allows users to access their saved grocery lists.
- Create Grocery List: Enables users to create a new grocery list by providing a list name and adding items.
- Edit Grocery List: Lets users update a saved grocery list by adding additional items.
- View Grocery List: Displays saved grocery lists organized by aisle, allowing users to mark items off as they are completed.
- Store Setup Page: Provides detailed information about all aisles and their respective locations within the store.

### Mockups

https://www.figma.com/design/3tpe2vbCNtAoDmmBH0Df8A/Capstone-Project?node-id=0-1&t=wuhgAQgEFcmj8GtG-1 

### Data

- Store -> Aisles: one-to-many
- Aisle -> Items: one-to-many
- Itmes -> each item belongs to one aisle 

### Endpoints

GET / items

[
    {
        "id": 55,
        "aisle_name": "water",
        "aisle_number": "Aisle 1",
        "item_name": "sparkling water"
    },
    {
        "id": 56,
        "aisle_name": "water",
        "aisle_number": "Aisle 1",
        "item_name": "coconut water"
    },
    {
        "id": 57,
        "aisle_name": "pop",
        "aisle_number": "Aisle 1",
        "item_name": "root beer"
    }
]



GET / lists

[
    {
        "id": 9,
        "list_name": "Party Items",
        "created_at": "2025-01-17T01:32:05.000Z",
        "updated_at": "2025-01-17T01:32:05.000Z"
    },
    {
        "id": 15,
        "list_name": "Pasta Dinner",
        "created_at": "2025-01-20T00:36:22.000Z",
        "updated_at": "2025-01-20T00:36:22.000Z"
    },
    {
        "id": 16,
        "list_name": "Camping Trip",
        "created_at": "2025-01-20T00:39:00.000Z",
        "updated_at": "2025-01-20T00:39:00.000Z"
    }
]



GET /lists/:id

{
    "id": 9,
    "list_name": "Party Items",
    "created_at": "2025-01-17T01:32:05.000Z",
    "updated_at": "2025-01-17T01:32:05.000Z",
    "items": [
        {
            "id": 20,
            "list_id": 9,
            "item_name": "Ginger Ale",
            "aisle_number": "Aisle 1",
            "checked": 1
        },
        {
            "id": 21,
            "list_id": 9,
            "item_name": "Coconut Water",
            "aisle_number": "Aisle 1",
            "checked": 0
        },
        {
            "id": 22,
            "list_id": 9,
            "item_name": "all-purpose cleaner",
            "aisle_number": "Aisle 8",
            "checked": 0
        },
        {
            "id": 23,
            "list_id": 9,
            "item_name": "ice cream cake",
            "aisle_number": "Aisle 14",
            "checked": 0
        },
        {
            "id": 24,
            "list_id": 9,
            "item_name": "gummy bears",
            "aisle_number": "Aisle 1",
            "checked": 0
        },
        {
            "id": 38,
            "list_id": 9,
            "item_name": "mustard",
            "aisle_number": "Aisle 5",
            "checked": 0
        }
    ]
}




PUT / lists/:id/items


{
  "items": [
    {
      "item_name": "Marshmallows",
      "aisle_number": "Aisle 1",
      "checked": true
    }
  ]
}



DELETE / lists/:id



## Roadmap

- Build out the static pages and routes 
- Develop the core layout and navigation
- Implement list creation, editing and saving.
- Add functionality for organizing list by aisle
- Connect frontend with backend API


---

## Future Implementations
- User Authentication: Introduce login functionality, enabling users to securely save and access their grocery lists across devices.
- Store-Specific Data: Allow users to select their preferred store, providing customized aisle layouts through partnerships with various grocery chains.
