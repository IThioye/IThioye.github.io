# Portfolio Admin Management Guide

To manage your portfolio data without editing files manually, follow these steps:

## 1. Start the Admin Server
The Admin UI requires a small local server to save changes to your `data.js` file.
Open a terminal in your project folder and run:
`node admin-server.js`

## 2. Open the Admin UI
Once the server is running, open the following file in your browser:
`admin.html`

## 3. Make Changes & Save
- Use the forms to edit your information.
- Click **"+ Ajouter"** to add new experiences, projects, or certifications.
- Click **"Supprimer"** to remove items.
- When finished, click the large blue **"Enregistrer les modifications"** button at the bottom.

## 4. Deploy
Once you've saved your changes locally and verified them on `index.html`, you can push your changes to GitHub as usual.

> [!TIP]
> This admin tool is designed for **LOCAL USE ONLY**. Do not host the `admin-server.js` on a public server.
