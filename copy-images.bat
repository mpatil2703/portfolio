@echo off
set SRC1=C:\Users\asus\.cursor\projects\d-Personal-Documents-Master-s-Resume-Master-and-Roles-based-Master-resume-Master-Portfolio\assets\c__Users_asus_AppData_Roaming_Cursor_User_workspaceStorage_758558336dccb08dd156199cae178493_images_ChatGPT_Image_Feb_20__2026__03_43_12_PM-df9d185a-513f-427d-b285-e87e507860fc.png
set SRC2=C:\Users\asus\.cursor\projects\d-Personal-Documents-Master-s-Resume-Master-and-Roles-based-Master-resume-Master-Portfolio\assets\c__Users_asus_AppData_Roaming_Cursor_User_workspaceStorage_758558336dccb08dd156199cae178493_images_Madhu_Patil-53a7a488-ea44-4f2b-a021-b2c3516b3a21.png
set DEST=%~dp0images
copy /Y "%SRC1%" "%DEST%\hero-bg.png"
copy /Y "%SRC2%" "%DEST%\profile.png"
echo Done. Images copied to images folder.
pause
