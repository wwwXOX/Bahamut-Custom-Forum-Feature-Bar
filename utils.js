function getQueryString(name) {
    const regex = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const result = window.location.search.substr(1).match(regex);
    return result ? decodeURIComponent(result[2]) : null;
  }
  
  function createMenuItem(text, onClick) {
    const menu = document.querySelector(".BH-menuE");
    if (!menu) {
      console.error("Menu element not found");
      return;
    }
  
    // Check if the item already exists to prevent duplicates
    if (Array.from(menu.children).some(li => li.textContent.includes(text))) {
      return;
    }
  
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.innerText = text;
    link.href = "javascript:void(0);";
    link.addEventListener("click", onClick);
  
    listItem.appendChild(link);
    menu.appendChild(listItem);
  }
  