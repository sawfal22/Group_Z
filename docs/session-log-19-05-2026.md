# Tuesday 19-05-2026
## Sameen
**What I worked on:**
- Created a new virtual machine and installed Ubuntu in it.
- Installed & configured Putty inside Ubuntu.
- Configured SSH, FTP, and SCP to securely copy files between the host machine and the Linux VM.
- Attempted to install and configure the Nginx web server.
- Attempted to deploy a static HTML website to the /var/www/html/ directory.

**What I learned:**
- Learned about Software Architecture, its types, and usage.
- Learned how to download, install, and configure an Ubuntu virtual machine for different system environments.
- Understood how to use Putty and configure SSH, FTP, and SCP for secure file transfers.
- Learned the workflow for setting up a web server (Nginx) and managing its services using systemctl commands.
- Understood how a web server’s document root directory works for deploying static website files.

**Blockers / Questions:**
- Faced initial issues while configuring Putty.
- Blocker (Step 4): Ran into trouble while installing and starting the Nginx web server service; had difficulties verifying if it was active and properly passing through the UFW firewall.
- Blocker (Step 5): Faced issues during the static website deployment phase; the custom HTML file was not displaying correctly when accessed via the VM's IP address.

# Tuesday 19-05-2026
## Saksham
**What I worked on:**
<<<<<<< HEAD
- Downloaded & installed Virtual Box
- Created a new virtual machine 

**What I learned:**
- Learned about Software Architecture
- Types of architectures and its usage
- Learned about how to download & install Ubuntu
=======
- Set up the environment using Virtual Box and installed the Ubuntu operating system.
- Established remote terminal access using Putty configurations.
- Tested secure file transfers between systems using SCP commands and explored SFTP alternatives using FileZilla.
- Worked on configuring Nginx web server packages, focusing on enabling the service automatically on boot.
- Drafted a basic static HTML landing page to test local deployment in the web server's document root.
 

**What I learned:**
- Gained hands-on experience setting up virtualized environments and navigating Linux OS installations.
- Learned how to utilize SCP commands to push local files (index.html) directly into remote server directories.
- Learned how to manage web server states using sudo systemctl commands (start, restart, status, reload).
- Understood the foundational structure of a static HTML document (<!DOCTYPE html>) and how web servers render them.
>>>>>>> c46c9a7 (Session logs updated by Saksham)


**Blockers / Questions:**
- Faced some issues while configuring Putty and virtual machine 

# Tuesday 19-05-2026
## Safal
**What I worked on:**
- Set up a virtual machine with Ubuntu, then installed and configured PuTTY, SSH, FTP, and SCP to enable file transfer between the host and Linux machine
- Installed and configured the Nginx web server
- Deployed a static HTML website to the /var/www/html/ directory

**What I learned:**
- Explored software architecture while configuring Ubuntu
- Setting up SSH/FTP/SCP file transfers via FileZilla
- Deploying a static website using Nginx and systemctl commands
- Gained hands-on experience in software architecture, Ubuntu setup, secure file transfers with FileZilla
- Managing Nginx web server to host static web content


**Blockers / Questions:**
- "Faced issues installing and verifying Nginx through UFW firewall, and struggled with the static HTML file not displaying correctly via the VM's IP address.

# Tuesday 19-05-2026

## Jagadish

**What I worked on:**
- On a Ubuntu Live server deplayed on VB, installed Open-SSH server and connect a host and server machine with NAT and Host-Only Network Adapter by implementing ping with Ip Address.

- Installed a third party FileZilla Software using SFTP Sofware to connect remote server with host machine and copied files from host to server(viceversa).

- Create a .txt file in Ubuntu using nano editor as well as in windows through   notepad.
- Moved that file in both machines using filezilla.
- Also created a html file in host machine using notepad (windows) and used SCP (secure copy files) to copy files between host and virtual machine.
- Installed and configured the Nginx web server
- Deployed a static website index.html locally in a browser (Succeed).

**What I learned:**
- Learned how to connect host machine with remote server using OpenSSH server.
- Establishment of host machine and virtual machine trasferring files using SFTP through filezilla.
- How to create .txt and html files and move or copy between remote server and host machine.
- How to deploy a static website using Nginx software and windows commands as well as using linux commands like install,start,enable,reload etc.
- Experience some architecture of softwares and file trasfer between host and virtual machines using FileZilla.
- How to make a html file displayed on local browser through nginx.


**Blockers / Questions:**
 - Had different issues while prompting the commands and coping files and even making connection between host and remote server.
 - Even get issues while initializing the static website with the help of nginx. 