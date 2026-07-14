const fs = require('fs');
const path = require('path');

const assets = 'C:\\Users\\asus\\.cursor\\projects\\d-Personal-Documents-Master-s-Resume-Master-and-Roles-based-Master-resume-Master-Portfolio\\assets';
const images = path.join(__dirname, 'images');

const hero = path.join(assets, 'c__Users_asus_AppData_Roaming_Cursor_User_workspaceStorage_758558336dccb08dd156199cae178493_images_ChatGPT_Image_Feb_20__2026__03_43_12_PM-df9d185a-513f-427d-b285-e87e507860fc.png');
const profile = path.join(assets, 'c__Users_asus_AppData_Roaming_Cursor_User_workspaceStorage_758558336dccb08dd156199cae178493_images_Madhu_Patil-53a7a488-ea44-4f2b-a021-b2c3516b3a21.png');

try {
  fs.copyFileSync(hero, path.join(images, 'hero-bg.png'));
  fs.copyFileSync(profile, path.join(images, 'profile photo.png'));
  console.log('Images copied successfully');
} catch (e) {
  console.error('Error:', e.message);
}
