# Bahamut Custom Forum Feature Bar

This Chrome extension adds custom search functionality to the Bahamut forum pages, allowing users to search by title or author directly from the forum's menu.

## Features

- Adds search by title functionality.
- Adds search by author functionality.
- Custom tooltips for each search icon.

## Installation

To install and use this Chrome extension, follow these steps:

### Step 1: Download or Clone the Repository

You can download this repository as a ZIP file and extract it, or clone it using Git.

```sh
git clone https://github.com/yourusername/bahamut-custom-forum-feature-bar.git
cd bahamut-custom-forum-feature-bar
```

### Step 2: Load the Extension in Chrome
1. Open Chrome and navigate to chrome://extensions/.
2. Enable "Developer mode" by toggling the switch in the top-right corner.
3. Click on the "Load unpacked" button.
4. Select the directory where you downloaded or cloned this repository.

#### Usage
Once the extension is installed and loaded in Chrome:

1. Navigate to the Bahamut forum pages.
2. You will see two new icons in the forum's menu:
    - 🔍 for searching by title
    - 👤 for searching by author

#### Search by Title
1. Click on the 🔍 icon.
2. Enter the title you want to search for in the prompt.
3. The page will navigate to the search results for the entered title.

#### Search by Author
1. Click on the 👤 icon.
2. Enter the author you want to search for in the prompt.
3. The page will navigate to the search results for the entered author.

#### Tooltip Functionality
When you hover over the search icons, a tooltip will appear with a brief description of the icon's functionality.

#### Files
manifest.json: Contains the extension's metadata and permissions.
popup.html: The HTML file for the extension's popup.
popup.js: JavaScript for handling the popup's toggle switch.
content.js: The content script that injects the search functionality into the forum pages.
utils.js: Utility functions used by the content script.
Contribution
If you would like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
