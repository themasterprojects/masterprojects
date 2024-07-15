const taskbarSection = document.querySelector('.taskbarSection');

const log = console.log;
log(`Master's Remakes : MasterOS, a Windows 10 Clone. Made by Yahya.`)
let innerWidth = '100vw';
let innerHeight = ((window.innerHeight - taskbarSection.offsetHeight) / window.innerHeight * 100) + 'vh'

// variables

const imgs = document.querySelectorAll('img');
const taskbarItemContainer = document.querySelectorAll('.activeAppsList .taskbarItemContainer');
let totalTaskbarItems = 0;
const rightTaskbarItem = document.querySelector('.rightTaskbarItemTime');
const rightTaskbarItemDate = document.querySelector('.rightTaskbarItemDate');
const taskbarBg = document.querySelector('.taskbarBg');
const iconsFieldSection = document.querySelector('.iconsFieldSection');
const rightClickMenuSection = document.querySelector('.rightClickMenuSection');

const startLeftItemContainer = document.querySelectorAll('.startLeftItemContainer');
const startMenuLeftSection = document.querySelector('.startMenuLeftSection');
const startMenuLeftContainer = document.querySelector('.startMenuLeftContainer');
const startLeftItemSpan = document.querySelectorAll('.startLeftItemSpan');
const startIcon = document.querySelector('.startIcon');
const startMenuContainer = document.querySelector('.startMenuContainer');
const startMenuRightSection = document.querySelector('.startMenuRightSection');
const startItemContainer = document.querySelectorAll('.startItemContainer');

const fileExplorerSection = document.querySelector('.fileExplorerSection');
const applicationSection = document.querySelectorAll('.applicationSection');
const commandPromptSection = document.querySelector('.commandPromptSection');

const desktopIconContainer = document.querySelectorAll('.desktopIconContainer');

const mediaPlayerLeftItemContainer = document.querySelectorAll('.mediaPlayerLeftItemContainer');

const menuItemContainer = document.querySelectorAll('.menuItemContainer');

const auxClickSecondListContainer = document.querySelectorAll('.auxClickSecondListContainer');

const backgroundItemContainer = document.querySelectorAll('.backgroundItemContainer');
const viewOptionItemContainer = document.querySelectorAll('.viewOptionItemContainer');

const mediaPlayerSection = document.querySelector('.mediaPlayerSection');
const mediaPlayerSectionCloseTab = document.querySelector('.mediaPlayerSection .closeTab');
const mediaPlayerLeftSection = document.querySelectorAll('.mediaPlayerLeftSection');
const leftListItemContainer = document.querySelectorAll('.leftListItemContainer');
const musicItemContainer = document.querySelectorAll('.musicItemContainer');
const absoluteCurrentMusicFocuserContainer = document.querySelector('.absoluteCurrentMusicFocuserContainer');
const absoluteCurrentMusicFocuserMusicTitle = document.querySelector('.absoluteCurrentMusicFocuserMusicTitle span');
const musicTitleAbsolute = document.querySelector('.musicTitleAbsolute');
const playMusicIconContainer = document.querySelector('.playMusicIconContainer');
const rightSectionMediaItem = document.querySelector('.rightSectionMediaItem');
const addFile = document.querySelector('.rightSectionMediaItem input');
const musicList = document.querySelector('.musicList');

const volumeAdjustContainer = document.querySelector('.volumeAdjustContainer');
const enlargeViewIcon = document.querySelector('.enlargeViewIcon');
const volumeBarWrapper = document.querySelector('.volumeBarWrapper');
const volumeBarTrack = document.querySelector('.volumeBarTrack');
const volumeAdjustConfigMenuContainer = document.querySelector('.volumeAdjustConfigMenuContainer');
const volumeBarThumbContainer = document.querySelector('.volumeBarThumbContainer');
const volumeValueFinal = document.querySelector('.volumeValueFinal span');
const volumeBarTrackInput = document.querySelector('.volumeBarTrack input');
const musicDurationAbsolute = document.querySelector('.musicDurationAbsolute div');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const MusicLibrarySection = document.querySelector('.MusicLibrarySection');
const mediaPlayerPartItemElement = document.querySelectorAll('.mediaPlayerPartItemElement');

let ACTIVE = 0;

// main

imgs.forEach(img => {
 img.draggable = false;
});

taskbarBg.style.height = `${taskbarSection.offsetHeight}px`;

const removeActivetabs = () => {
 taskbarItemContainer.forEach(taskbarItemContainer => {
  applicationSection.forEach(applicationSection => {
   const applicationHeaderTopContainer = applicationSection.querySelector('.applicationHeaderTopContainer');
   if (taskbarItemContainer.classList.contains('active')) {
    taskbarItemContainer.classList.remove('active');
    taskbarItemContainer.classList.add('activeMinimized');
   }
  })
 });
}

let activeWindow = false; 

function removeZINDEX() {
 applicationSection.forEach(applicationSection => {
  const applicationHeaderTopContainer = applicationSection.querySelector('.applicationHeaderTopContainer');

  applicationSection.style.zIndex = 10;
 });
} 

taskbarItemContainer.forEach(taskbarItemContainer => {
 totalTaskbarItems += 1;
 log(`${totalTaskbarItems} Taskbar Items`);

 applicationSection.forEach(applicationSection => {
  const minimizeTab = applicationSection.querySelector('.minimizeTab');
  const closeTab = applicationSection.querySelector('.closeTab');

  taskbarItemContainer.addEventListener('click', e => {
   closeMenu();
   
   function openApplication() {
    if (taskbarItemContainer.classList.contains('active')) {
     applicationSection.classList.remove('applicationSectionActive');
     minimizeTab.click();
    } else {
     applicationSection.classList.add('applicationSectionActive');
     taskbarItemContainer.classList.remove('active');
     taskbarItemContainer.classList.add('activeMinimized');
    }
   }
  
   function unminimizeTab() {
    applicationSection.style.transition = '300ms';
    applicationSection.style.zIndex = '10';
    applicationSection.style.transform = `translate(0px,0px)`;
    setTimeout(e => {
     applicationSection.style.transition = '0ms';
    }, 300);
    openApplication();
   }
 
   function minimize() {
    applicationSection.style.transition = '300ms';
    applicationSection.style.zIndex = '-1';
    applicationSection.style.transform = `translate(-20%, 400px)`;
    setTimeout(e => {
     applicationSection.style.transition = '0ms';
    }, 300);
    applicationSection.classList.remove('applicationSectionActive');
   }

   function autoEditTaskbarIcons() {
    if (applicationSection.classList.contains('applicationSectionActive')) {
     activeWindow = true;
     taskbarItemContainer.classList.add('active');
     taskbarItemContainer.classList.remove('activeMinimized');
    } else {
     activeWindow = false;
     taskbarItemContainer.classList.remove('active');
     taskbarItemContainer.classList.add('activeMinimized');
    }
   }
 
   if (taskbarItemContainer.id == applicationSection.id) {
    removeActivetabs();
    openApplication();
    auxClickMenu();

    removeZINDEX();
    applicationSection.style.zIndex = '20';

    applicationSection.addEventListener('click', e => {
     removeZINDEX();
     applicationSection.style.zIndex = '20';
    });

    applicationSection.style.transition = '300ms';
    setTimeout(e => {
     applicationSection.style.transition = '0ms';
    }, 30);
  
    if (applicationSection.style.transform == `translate(-20%, 400px)`) {
     applicationSection.style.transform = `translate(0px, 0px)`;
     applicationSection.classList.add('applicationSectionActive');
    }

    closeTab.addEventListener('click', e => {
     taskbarItemContainer.classList.remove('active');
     taskbarItemContainer.classList.remove('activeMinimized');
   });

    minimizeTab.addEventListener('click', e => {
     minimize();
     activeWindow = false;
     autoEditTaskbarIcons()
    });

    autoEditTaskbarIcons(); 
  
    // if (applicationSection.style.transform == `translate(-20%, 200%)`) {
    //  unminimizeTab();
    // } else {
    //  minimize();
    // }
 
    // if (applicationSection.style.transform == `translate(0px, 0px)`) {
    //  minimize();
    // } else {
    //  unminimizeTab();
    // } 
   } 
  });
 });
});

let date = new Date();
let dateDate = date.toLocaleDateString();
let dateTime = date.toLocaleTimeString()

rightTaskbarItem.innerHTML = dateTime;
rightTaskbarItemDate.innerHTML = dateDate;

setInterval(e => {
 date = new Date();
 dateDate = date.toLocaleDateString();
 dateTime = date.toLocaleTimeString()
 
 rightTaskbarItem.innerHTML = dateTime;
 rightTaskbarItemDate.innerHTML = dateDate;
}, 1000);

const openMenu = () => {
 startMenuContainer.classList.toggle('startMenuContainerActive');
 if (startMenuContainer.classList.contains('startMenuContainerActive')) {
  startIcon.classList.add('startIconBefore');
 } else {
  startIcon.classList.remove('startIconBefore');
 }

 startMenuRightSection.scrollTop = 0;

 removeActivetabs();
}
const closeMenu = () => {
 startMenuContainer.classList.remove('startMenuContainerActive');
 if (startMenuContainer.classList.contains('startMenuContainerActive')) {
  startIcon.classList.add('startIconBefore');
 } else {
  startIcon.classList.remove('startIconBefore');
 }

 startMenuRightSection.scrollTop = 0;
}

const auxClickMenu = () => {
 rightClickMenuSection.classList.remove('rightClickMenuSectionActive');
}

startIcon.addEventListener('click', e => {
 openMenu();
 auxClickMenu();

 setTimeout(e => {
  iconsFieldSection.addEventListener('click', closeMenu);
 }, 1);
 iconsFieldSection.removeEventListener('click', closeMenu);
});

const removeActiveMenu = () => {
 rightClickMenuSection.classList.remove('rightClickMenuSectionActive');
}

iconsFieldSection.addEventListener('auxclick', e => {
 const x = e.clientX - iconsFieldSection.offsetLeft;
 const y = e.clientY - iconsFieldSection.offsetTop;

 closeMenu();

 rightClickMenuSection.classList.add('rightClickMenuSectionActive');

 rightClickMenuSection.style.top = `${y}px`;
 rightClickMenuSection.style.left = `${x}px`;

 if ((iconsFieldSection.offsetHeight - rightClickMenuSection.offsetHeight) <= y) {
  rightClickMenuSection.style.top = `${y / 2}px`;
 }

 if ((iconsFieldSection.offsetWidth - rightClickMenuSection.offsetWidth) <= x) {
  rightClickMenuSection.style.left = `${(iconsFieldSection.offsetWidth - rightClickMenuSection.offsetWidth)}px`;
 }

 auxClickSecondListContainer.forEach(auxClickSecondListContainer => {
  if (iconsFieldSection.offsetWidth - auxClickSecondListContainer.offsetWidth <= x) {
   auxClickSecondListContainer.style.left = `-100%`;
  } else {
   auxClickSecondListContainer.style.left = `100%`;
  }
 })

 iconsFieldSection.addEventListener('click', e => {
  removeActivetabs();
  auxClickMenu();
 });
});

startMenuLeftSection.addEventListener('mouseover', e => {
 startMenuLeftContainer.classList.add('startMenuLeftContainerActive');
 startLeftItemSpan.forEach(startLeftItemSpan => {
  startLeftItemSpan.classList.add('startLeftItemSpanActive');
 });
});

startMenuLeftSection.addEventListener('mouseout', e => {
 startMenuLeftContainer.classList.remove('startMenuLeftContainerActive');
 startLeftItemSpan.forEach(startLeftItemSpan => {
  startLeftItemSpan.classList.remove('startLeftItemSpanActive');
 });
});

startItemContainer.forEach(startItemContainer => {
 const hoverEffectWrapper = startItemContainer.querySelector('.hoverEffect');

 startItemContainer.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;


  hoverEffectWrapper.animate({
   left: `${x}px`
  }, {
   duration: 0,
   fill: 'forwards'
  });
 });

 taskbarItemContainer.forEach(taskbarItemContainer => {
  if (taskbarItemContainer.id == startItemContainer.id) {
   startItemContainer.addEventListener('click', e => {
    taskbarItemContainer.click();
   });   
  }
 });
});

applicationSection.forEach(applicationSection => {
 const closeTab = applicationSection.querySelector('.closeTab');
 const restoreTab = applicationSection.querySelector('.restoreTab');
 const minimizeTab = applicationSection.querySelector('.minimizeTab');
 const applicationHeaderTopContainer = applicationSection.querySelector('.applicationHeaderTopContainer');
 const applicationTitleContainer = applicationSection.querySelector('.applicationTitleContainer');
 const styles = window.getComputedStyle(applicationSection);

 // taskbarItemContainer.forEach(taskbarItemContainer => {
 //  applicationSection.addEventListener('click', e => {
 //   if (applicationSection.id == taskbarItemContainer.id) {
 //    removeActivetabs();
 //    taskbarItemContainer.classList.add('active');
 //    taskbarItemContainer.classList.remove('activeMinimized');
 //   }
 //  });
 // });

 closeTab.addEventListener('click', e => {
  applicationSection.classList.remove('applicationSectionActive');
  activeWindow = false;

  const consoleInput = document.querySelector('.consoleInput input');
  const printedValue = document.querySelector('.printedValue');
  const consoleResult = document.querySelector('.consoleResult');
  if(consoleInput) {
   consoleInput.value = '';
   printedValue.innerHTML = consoleInput.value + ' ';

   consoleResult.style.display = 'none';
  }
 });

 function tabMovement() {
  const windowMove = (e) => {
   const x = e.clientX;
   const y = e.clientY;

   applicationSection.style.transform = `translate(${x}px,${y}px)`;
   applicationSection.style.transition = '0ms';

   removeZINDEX();
   applicationSection.style.zIndex = '20';

   removeActivetabs();
   closeMenu();
   taskbarItemContainer.forEach(taskbarItemContainer => {
    if (applicationSection.id == taskbarItemContainer.id) {
     taskbarItemContainer.classList.add('active');
     taskbarItemContainer.classList.remove('activeMinimized');
    };
   });
  };

  const windowStable = (e) => {
   const x = e.clientX;
   const y = e.clientY;

   applicationSection.style.transition = '0ms';

   document.removeEventListener('mousemove', windowMove);
   document.removeEventListener('mouseup', windowStable);


   if (y <= -10) {
    applicationSection.style.transform = `translate(50%,50%)`;
   } else if ((window.innerHeight - applicationSection.offsetHeight) <= y) {
    applicationSection.style.transform = `translate(${x}px, ${(window.innerHeight - applicationSection.offsetHeight)}px)`;
   }

   if ((window.innerWidth - applicationSection.offsetWidth) <= x) {
    applicationSection.style.transform = `translate(50%,50%)`;
   }
  };

  document.addEventListener('mousemove', windowMove);
  document.addEventListener('mouseup', windowStable);
 };

 function checkAppSize() {
  if (applicationSection.style.width == innerWidth) {
   applicationTitleContainer.removeEventListener('mousedown', tabMovement);
  } else {
   applicationTitleContainer.addEventListener('mousedown', tabMovement);
  }
 };

 function resizetab() {
  if (applicationSection.style.width == innerWidth) {
   applicationSection.style.height = '400px';
   applicationSection.style.width = '600px';

   applicationSection.classList.remove('applicationSectionMax');
   checkAppSize();
  } else {
   applicationSection.style.height = innerHeight;
   applicationSection.style.width = innerWidth;
   applicationSection.classList.add('applicationSectionMax');

   checkAppSize();
  }
 };

 function minimize() {
  applicationSection.style.transition = '300ms';
  applicationSection.style.transform = `translate(-20%, 200px)`;
  applicationSection.classList.remove('applicationSectionMax');
  setTimeout(e => {
   applicationSection.style.transition = '0ms';
  }, 300);
 }

 function unminimizeTab() {
  applicationSection.style.transition = '300ms';
  applicationSection.style.transform = `translate(0px,0px)`;
  setTimeout(e => {
   applicationSection.style.transition = '0ms';
  }, 300);
 }

 checkAppSize();

 restoreTab.addEventListener('click', resizetab);
 applicationTitleContainer.addEventListener('dblclick', resizetab);
});

let colorsList = [
 {
  name: 'color 0',
  color: 'Default White',
  colorValue: 'rgb(204,204,204)'
 },
 {
  name: 'color 1',
  color: 'Blue',
  colorValue: 'blue'
 },
 {
  name: 'color 2',
  color: 'Green',
  colorValue: 'green'
 },
 {
  name: 'color 3',
  color: 'Aqua',
  colorValue: 'aqua'
 },
 {
  name: 'color 4',
  color: 'Red',
  colorValue: 'red'
 },
 {
  name: 'color 5',
  color: 'Purple',
  colorValue: 'purple'
 },
 {
  name: 'color 6',
  color: 'Yellow',
  colorValue: 'yellow'
 },
 {
  name: 'color 7',
  color: 'White',
  colorValue: 'white'
 },
 {
  name: 'color 8',
  color: 'Gray',
  colorValue: 'gray'
 },
 {
  name: 'color 9',
  color: 'Light Blue',
  colorValue: 'lightblue'
 },
 {
  name: 'color a',
  color: 'Light Green',
  colorValue: 'rgb(22, 198, 12)'
 },
 {
  name: 'color b',
  color: 'Light Aqua',
  colorValue: 'aquamarine'
 },
 {
  name: 'color c',
  color: 'Light Red',
  colorValue: 'rgb(231, 72, 86)'
 },
 {
  name: 'color d',
  color: 'Light Purple',
  colorValue: 'rgb(180, 0, 158)'
 },
 {
  name: 'color e',
  color: 'Light Yellow',
  colorValue: 'rgb(249, 241, 165)'
 },
 {
  name: 'color f',
  color: 'Bright White',
  colorValue: 'whitesmoke'
 },
 {
  name: 'master',
  color: 'Master Color',
  colorValue: '#FFD700'
 }
];

colorsList.forEach(colorItem => {
 commandPromptSection.addEventListener('click', e => {
  const consoleInput = commandPromptSection.querySelector('.consoleInput input');
  const printedValue = commandPromptSection.querySelector('.printedValue');
  const stylesprintedValue = getComputedStyle(printedValue, ':before');
  const printedValueBefore = commandPromptSection.querySelector('.printedValueBefore');
  const consoleRecognizedResult = commandPromptSection.querySelector('.consoleRecognizedResult');
  const consoleResult = commandPromptSection.querySelector('.consoleResult');
  let outputValue = commandPromptSection.querySelector('.outputValue');
  let value = '';

  let cmdCommands = [
   {
    command: 'colors list',
    output: 'Sets the default console foreground and background colors. <br> <br> <div class="colorsContainer"> <div class="colors"> <div class="leftColor"> 0 = Black <br> 1 = Blue <br> 2 = Green <br> 3 = Aqua <br> 4 = Red <br> 5 = Purple <br> 6 = Yellow <br> 7 = White </div> <div class="rightColors"> 8 = Gray <br> 9 = Light Blue <br> A = Light Green <br> B = Light Aqua <br> C = Light Red <br> D = Light Purple <br> E = Light Yellow <br> F = White </div> </div> </div>'
   },
   {
    command: 'color list',
    output: 'Sets the default console foreground and background colors. <br> <br> <div class="colorsContainer"> <div class="colors"> <div class="leftColor"> 0 = Black <br> 1 = Blue <br> 2 = Green <br> 3 = Aqua <br> 4 = Red <br> 5 = Purple <br> 6 = Yellow <br> 7 = White </div> <div class="rightColors"> 8 = Gray <br> 9 = Light Blue <br> A = Light Green <br> B = Light Aqua <br> C = Light Red <br> D = Light Purple <br> E = Light Yellow <br> F = White </div> </div> </div>'
   },
   {
    command: 'color',
    output: 'Sets the default console foreground and background colors. <br> <br> <div class="colorsContainer"> <div class="colors"> <div class="leftColor"> 0 = Black <br> 1 = Blue <br> 2 = Green <br> 3 = Aqua <br> 4 = Red <br> 5 = Purple <br> 6 = Yellow <br> 7 = White </div> <div class="rightColors"> 8 = Gray <br> 9 = Light Blue <br> A = Light Green <br> B = Light Aqua <br> C = Light Red <br> D = Light Purple <br> E = Light Yellow <br> F = White </div> </div> </div>'
   },
   {
    command: 'colors',
    output: 'Sets the default console foreground and background colors. <br> <br> <div class="colorsContainer"> <div class="colors"> <div class="leftColor"> 0 = Black <br> 1 = Blue <br> 2 = Green <br> 3 = Aqua <br> 4 = Red <br> 5 = Purple <br> 6 = Yellow <br> 7 = White </div> <div class="rightColors"> 8 = Gray <br> 9 = Light Blue <br> A = Light Green <br> B = Light Aqua <br> C = Light Red <br> D = Light Purple <br> E = Light Yellow <br> F = White </div> </div> </div>'
   }
  ];

  cmdCommands.forEach(cmdCommand => {
   consoleInput.focus();
 
   consoleInput.addEventListener('focus', e => {
    printedValue.classList.add('printedValueBefore');
   });
   consoleInput.addEventListener('focusout', e => {
    printedValue.classList.remove('printedValueBefore');
   });
  
   printedValue.style.width = '300px';
  
   function inputKeydown(e) {
    if (e.key == 'Enter') {
     consoleInput.classList.remove('consoleInputHeight');
     if (value.toLowerCase() == colorItem.name) {
      consoleRecognizedResult.style.display = 'block';
      consoleResult.style.display = 'none';
 
      commandPromptSection.style.color = colorItem.colorValue;
      consoleRecognizedResult.innerHTML = `Foreground Color: ${colorItem.color}`;
     }
     else if (value.toLowerCase() == cmdCommand.command) {
      consoleRecognizedResult.style.display = 'block';
      consoleResult.style.display = 'none';
 
      consoleRecognizedResult.innerHTML = cmdCommand.output;
     } 
     else {
      if (consoleRecognizedResult.style.display == 'none') {
       consoleResult.style.display = 'block';
      }
 
      outputValue.innerHTML = `'${value.split(' ')[0]}'`;
      consoleResult.classList.add('consoleResultVisible');
     };
    }
     else if (e.ctrlKey) {
      e.preventDefault();
      if (e.ctrlKey) {
       if(e.key == 'v') {
        window.removeEventListener('keydown', inputKeydown);
       }
      }
     }
   };
  
   consoleInput.addEventListener('input', e => {
    value = consoleInput.value;
  
    consoleInput.classList.add('consoleInputHeight');
    printedValue.classList.add('printedValueBefore');
    consoleResult.style.display = 'none';
    consoleRecognizedResult.style.display = 'none';
  
    printedValue.innerHTML = value + ' ';
  
    window.addEventListener('keydown', inputKeydown);
   });
  
   consoleInput.addEventListener('focusout', e => {
    window.removeEventListener('keydown', inputKeydown);
   });
  });
 });
});

function supprActive() {
 desktopIconContainer.forEach(desktopIconContainer => {
  const desktopIconWrapper = desktopIconContainer.querySelector('.desktopIconWrapper');
  desktopIconWrapper.classList.remove('ActiveDesktopIcon');
 });
}

desktopIconContainer.forEach(desktopIconContainer => {
 const desktopIconWrapper = desktopIconContainer.querySelector('.desktopIconWrapper');
 const blueMouseFollowerContainer = document.querySelector('.blueMouseFollowerContainer');

 function dragging(e) {
  const x = e.clientX
  const y = e.clientY

  desktopIconContainer.style.position = 'absolute';
  desktopIconContainer.style.top = `${y}px`;
  desktopIconContainer.style.left = `${x}px`;

  blueMouseFollowerContainer.style.display = 'none'

  e.preventDefault();
 }

 function draggingStop(e) {
  iconsFieldSection.removeEventListener('mousemove', dragging);
  iconsFieldSection.removeEventListener('mouseup', draggingStop);
 }

 desktopIconContainer.addEventListener('dragstart', e => {
  iconsFieldSection.addEventListener('mousemove', dragging);
  iconsFieldSection.addEventListener('mouseup', draggingStop);
  e.preventDefault();
 })

 desktopIconContainer.addEventListener('dragend', e => {
  iconsFieldSection.addEventListener('mouseup', draggingStop);
 });

 desktopIconContainer.addEventListener('click', e => {
  supprActive();
  desktopIconWrapper.classList.add('ActiveDesktopIcon');
 });

 function blueSquareMovement(e) {
  const x = e.clientX - iconsFieldSection.offsetLeft;
  const y = e.clientY - iconsFieldSection.offsetTop;

  blueMouseFollowerContainer.style.width = `${x}px`;
  blueMouseFollowerContainer.style.height = `${y}px`;

  blueMouseFollowerContainer.style.display = 'none';
 }

 function blueSquareStable() {
  iconsFieldSection.removeEventListener('mousemove', blueSquareMovement);
  iconsFieldSection.removeEventListener('mouseup', blueSquareStable);

  blueMouseFollowerContainer.style.display = 'none';
 }

 iconsFieldSection.addEventListener('mousedown', e => {
  const x = e.clientX;
  const y = e.clientY;

  iconsFieldSection.addEventListener('auxclick', e => {
   iconsFieldSection.removeEventListener('mousemove', blueSquareMovement);
   iconsFieldSection.removeEventListener('mouseup', blueSquareStable);
  });

  blueMouseFollowerContainer.style.width = '0px';
  blueMouseFollowerContainer.style.height = `0px`;

  iconsFieldSection.addEventListener('mousemove', blueSquareMovement);
  iconsFieldSection.addEventListener('mouseup', blueSquareStable);
 });

 iconsFieldSection.addEventListener('auxclick', e => {
  blueMouseFollowerContainer.style.display = 'none';
 });
});

let backgrounds = [
 {
  name: 'Samurai Wallpaper',
  link: 'url(main/images/samurai.webp)'
 },
 {
  name: 'Pirate Skull',
  link: 'url(https://i.ibb.co/C7VgF9R/pirate-skull-gold-minimal-1596932761.jpg)'
 },
 {
  name: 'Chill Wallpaper High Quality',
  link: 'url(https://i.ibb.co/Fx74J4b/1354305.jpg)'
 },
 {
  name: 'Tom Wallpaper',
  link: 'url(https://images.hdqwalls.com/download/cool-tom-na-1920x1080.jpg)'
 },
 {
  name: 'Ben 10 Alien Force Wallpaper',
  link: 'url(https://i.ibb.co/4dpzkRy/2403994.png)'
 },
 {
  name: 'Luffy Wallpaper 1',
  link: 'url(https://i.ibb.co/vVrp1Hj/Screenshot-1379.png)'
 },
 {
  name: 'Donquixote Doflamingo Wallpaper 1',
  link: 'url(https://i.ibb.co/VHrwvRT/Screenshot-1174.png)'
 },
 {
  name: 'Golden Seven',
  link: 'url(https://i.ibb.co/Js96C2w/Golden-Seven.png)'
 },
 {
  name: 'Crimson Seven',
  link: 'url(https://i.ibb.co/tL4qzWS/Crimson-Logo.png)'
 }
];

const removeActiveMediaPlayerItem = () => {
 mediaPlayerLeftItemContainer.forEach(mediaPlayerLeftItemContainer => {
  mediaPlayerLeftItemContainer.classList.remove('mediaPlayerLeftItemContainerActive');
 });
}

let totalMLItems = 0;
let MLItemsRank = 0

const removeActiveMLSections = () => {
 mediaPlayerPartItemElement.forEach(mediaPlayerPartItemElement => {
  mediaPlayerPartItemElement.classList.remove('mediaPlayerPartItemElementActive');
 });
};

const HomeLibrarySectionBtn = document.querySelector('.HomeLibrarySectionBtn');

mediaPlayerLeftItemContainer.forEach(mediaPlayerLeftItemContainer => {
 totalMLItems += 1
 mediaPlayerLeftItemContainer.dataset.order = totalMLItems;

 mediaPlayerLeftItemContainer.addEventListener('click', e => {
  const mediaPlayerLeftItemSpan = mediaPlayerLeftItemContainer.querySelector('.mediaPlayerLeftItemSpan');

  mediaPlayerPartItemElement.forEach(mediaPlayerPartItemElement => {
   if (mediaPlayerPartItemElement.id.includes(mediaPlayerLeftItemContainer.id)) {
    removeActiveMLSections();
    mediaPlayerPartItemElement.classList.add('mediaPlayerPartItemElementActive');

    log(mediaPlayerPartItemElement.id, mediaPlayerLeftItemContainer.id)
   };
  });

  MLItemsRank = Number(mediaPlayerLeftItemContainer.dataset.order);
  log('Rank:', MLItemsRank);
  removeActiveMediaPlayerItem();
  mediaPlayerLeftItemContainer.classList.add('mediaPlayerLeftItemContainerActive');

  localStorage.setItem('selectedMLLeftBtn', MLItemsRank);
 });
 
 let storedSelectedBtnMLPLAYER = localStorage.getItem('selectedMLLeftBtn');

 if (storedSelectedBtnMLPLAYER) {
  if (Number(mediaPlayerLeftItemContainer.dataset.order) == storedSelectedBtnMLPLAYER) {
   mediaPlayerLeftItemContainer.click();
  } 
 }
 else {
  HomeLibrarySectionBtn.click();
 }
});

menuItemContainer.forEach(menuItemContainer => {
 const menuItemIconContainer = menuItemContainer.querySelector('.menuItemIconContainer');
 menuItemContainer.addEventListener('mousedown', e => {
  if (menuItemIconContainer.style.opacity == '0') {
   rightClickMenuSection.classList.remove('rightClickMenuSectionActive');
  }
 });
});

const removeBackgroundChecks = () => {
 backgroundItemContainer.forEach(backgroundItemContainer => {
  const backgroundItemCheck = backgroundItemContainer.querySelector('.backgroundItemCheck');
  backgroundItemCheck.classList.remove('checkDisplay');
 })
}

let totalBackgroundItems = 0;
let backgroundRank = 0;

const defaultBackground = document.querySelector('.defaultBackground');

backgroundItemContainer.forEach(backgroundItemContainer => {
 const backgroundItemSpan = backgroundItemContainer.querySelector('.backgroundItemSpan span');
 const backgroundItemCheck = backgroundItemContainer.querySelector('.backgroundItemCheck');
 totalBackgroundItems++;
 backgroundItemContainer.dataset.order = totalBackgroundItems;
 backgrounds.forEach(background => {
  backgroundItemContainer.addEventListener('click', e => {
   backgroundRank = Number(backgroundItemContainer.dataset.order);
   if (backgroundItemSpan.innerHTML.toLowerCase() == background.name.toLowerCase()) {
    removeBackgroundChecks();
    backgroundItemCheck.classList.add('checkDisplay');
    document.body.style.transition = '300ms';
    document.body.style.background = background.link;
    setTimeout(e => {
     document.body.style.transition = '0ms';
    }, 300);
   }

   localStorage.setItem('selectedBackground', backgroundRank);
  });

  let storedBackground = localStorage.getItem('selectedBackground');

  if (Number(backgroundItemContainer.dataset.order) == storedBackground) {
   backgroundItemContainer.click();
  }
 });
});

viewOptionItemContainer.forEach(viewOptionItemContainer => {
 const viewOptionItemCheck = viewOptionItemContainer.querySelector('.viewOptionItemCheck');
 const viewOptionItemSpan = viewOptionItemContainer.querySelector('.viewOptionItemSpan span');
 desktopIconContainer.forEach(desktopIconContainer => {
  viewOptionItemContainer.addEventListener('click', e => {

  });
 });
});

mediaPlayerLeftSection.forEach(mediaPlayerLeftSection => {
 const mediaPlayerLeftItemContainer = mediaPlayerLeftSection.querySelectorAll('.mediaPlayerLeftItemContainer');
 const mediaPlayerMenuControlWrapper = mediaPlayerLeftSection.querySelector('.mediaPlayerMenuControlWrapper');
 const mediaPlayerSearchWrapper = mediaPlayerLeftSection.querySelector('.mediaPlayerSearchWrapper');
 const mediaPlayerSearchInput = mediaPlayerLeftSection.querySelector('.mediaPlayerSearchInput input');


 mediaPlayerLeftSection.classList.add('mediaPlayerLeftSectionMinimized');

 mediaPlayerMenuControlWrapper.addEventListener('click', e => {
  mediaPlayerLeftSection.classList.toggle('mediaPlayerLeftSectionMinimized');
 });

 mediaPlayerSearchInput.addEventListener('focus', e => {
  mediaPlayerSearchWrapper.classList.add('focusedmediaPlayerSearchWrapper');
 });
 mediaPlayerSearchInput.addEventListener('focusout', e => {
  mediaPlayerSearchWrapper.classList.remove('focusedmediaPlayerSearchWrapper');
 });

});

const suppressActiveMPItem = () => {
 leftListItemContainer.forEach(leftListItemContainer => {
  leftListItemContainer.classList.remove('leftListItemContainerActive');
 });
}

leftListItemContainer.forEach(leftListItemContainer => {
 leftListItemContainer.addEventListener('click', e => {
  suppressActiveMPItem();
  leftListItemContainer.classList.add('leftListItemContainerActive');
 });
});

let totalMusics = 0;

const removeCurrentMusic = () => {
 musicItemContainer.forEach(musicItemContainer => {
  musicItemContainer.classList.remove('musicItemContainerPlaying');
 });
}

let CurrentAudio = new Audio(`main/audio/Polyphia - Playing God (Official Music Video).mp3`);

let secondsCounter = 0;
let minutesCounter = 0;

let musicIndex = 0;

addFile.addEventListener('input', e => {
 log(addFile.value)
 // musicList.insertAdjacentHTML("beforeend", ' <div class="musicItemContainer"> <div class="musicItemWrapper"> <div class="musicItemInsider"> <div class="musicItem"> <div class="musicItemPart mainMusicPart"> <div class="mainPartLeftSection"> <div class="musicCheckboxContainer"> <div class="musicCheckboxWrapper"> <div class="musicCheckbox"> <img src="https://i.ibb.co/542WYJD/icons8-check-48.png" width="11" alt=""> </div> </div> </div> <div class="musicPlayIconContainer"> <div class="musicPlayIconWrapper"> <div class="musicPlayIcon"> <img src="https://i.ibb.co/Y71ZrD7/icons8-play-48.png" width="16" alt=""> </div> </div> </div> </div> <div class="musicTitleContainer"> <div class="musicTitleWrapper"> <div class="musicTitle"> <span>Polyphia - Playing God (Official Music Video)</span> </div> </div> </div> </div> <div class="musicItemPart"> <div class="musicItemArtistBtnContainer musicPlayerMusicAboutContainer"> <div class="musicItemArtistBtnWrapper musicPlayerMusicAboutWrapper"> <div class="musicItemArtistBtn musicPlayerMusicAbout"> <span>Unknown artist</span> </div> </div> </div> </div> <div class="musicItemPart"> <div class="musicItemGenreBtnContainer musicPlayerMusicAboutContainer"> <div class="musicItemGenreBtnWrapper musicPlayerMusicAboutWrapper"> <div class="musicItemGenreBtn musicPlayerMusicAbout"> <span>Unknown genre</span> </div> </div> </div> </div> <div class="musicItemPart"> <div class="musicDurationContainer"> <div class="musicDurationWrapper"> <div class="musicDuration"> <span>3:23</span> </div> </div> </div> </div> </div> </div> </div> </div>')
});

const toggleVolumeMenu = () => {
 volumeAdjustConfigMenuContainer.classList.toggle('volumeAdjustConfigMenuContainerActive');
};

musicItemContainer.forEach(musicItemContainer => {
 totalMusics++;

 musicItemContainer.dataset.order = totalMusics;

 if (Number(musicItemContainer.dataset.order) % 2 != 0) {
  musicItemContainer.classList.add('musicItemContainerFirstRow');
 }

 volumeBarTrackInput.addEventListener('input', e => {
  volumeValueFinal.innerHTML = volumeBarTrackInput.value;
  playMusicIconContainer.volume = volumeBarTrackInput.value;
  CurrentAudio.volume = volumeBarTrackInput.value / 100;
  localStorage.setItem('selectedVolumeValue', volumeBarTrackInput.value);
 });
 
 volumeValueFinal.innerHTML = volumeBarTrackInput.value;
 
 let storedVolumeValue = localStorage.getItem('selectedVolumeValue');
 
 if (storedVolumeValue) {
  volumeBarTrackInput.value = storedVolumeValue;
  volumeValueFinal.innerHTML = volumeBarTrackInput.value;
 }

 musicItemContainer.addEventListener('click', e => {
  removeCurrentMusic();
  musicItemContainer.classList.add('musicItemContainerPlaying');

  toggleVolumeMenu();

  const musicTitle = musicItemContainer.querySelector('.musicTitle span');

  CurrentAudio.pause();
  CurrentAudio.currentTime = 0;

  secondsCounter = 0;
  minutesCounter = 0;
  seconds.innerHTML = secondsCounter;
  minutes.innerHTML = '0' + minutesCounter;
  
  musicTitleAbsolute.classList.add('musicTitleAbsoluteAnimation');
  setTimeout(e => {
   musicTitleAbsolute.classList.remove('musicTitleAbsoluteAnimation');
  }, 600);
  setTimeout(e => {
   absoluteCurrentMusicFocuserMusicTitle.innerHTML = musicTitle.innerHTML;
   CurrentAudio = new Audio(`main/audio/${absoluteCurrentMusicFocuserMusicTitle.innerHTML}.mp3`);
  }, 0);

  setTimeout(e => {
   playMusicIconContainer.click();
   CurrentAudio.volume = volumeBarTrackInput.value / 100;

   if (volumeBarTrackInput.value == 0) {
    CurrentAudio.volume = 0;
   }
  }, 0);
 });
});

function autoEditDuration() {
 setInterval(e => {
  secondsCounter++;
  if (secondsCounter == 60) {
   secondsCounter = 0;
   minutesCounter++;
  }

  seconds.innerHTML = secondsCounter;
  minutes.innerHTML = '0' + minutesCounter;
 }, 1000);

 CurrentAudio.addEventListener('ended', e => {
  secondsCounter = 0;
  minutesCounter = 0;
  seconds.innerHTML = secondsCounter;
  minutes.innerHTML = '0' + minutesCounter;
 });
}

playMusicIconContainer.addEventListener('click', e => {
 CurrentAudio.play();
 autoEditDuration();
});

mediaPlayerSectionCloseTab.addEventListener('click', e => {
 CurrentAudio.pause();
 CurrentAudio.currentTime = 0;
 CurrentAudio.volume = 0;

 secondsCounter = 0;
 minutesCounter = 0;
 seconds.innerHTML = secondsCounter;
 minutes.innerHTML = '0' + minutesCounter;
})

CurrentAudio.addEventListener('ended', e => {
 CurrentAudio.currentTime = 0;
 CurrentAudio.play();
});

volumeAdjustContainer.addEventListener('click', toggleVolumeMenu);
enlargeViewIcon.addEventListener('click', e => {
 if (mediaPlayerSection.requestFullscreen) {
  mediaPlayerSection.requestFullscreen();
 } else {
  mediaPlayerSection.exitFullscreen();
 }
});