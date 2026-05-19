# Tuesday 12-05-2026
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
-Set up the environment using Virtual Box and installed the Ubuntu operating system.
-Established remote terminal access using Putty configurations.
-Tested secure file transfers between systems using SCP commands and explored SFTP alternatives using FileZilla.
-Worked on configuring Nginx web server packages, focusing on enabling the service automatically on boot.
-Drafted a basic static HTML landing page to test local deployment in the web server's document root.
 

**What I learned:**
-Gained hands-on experience setting up virtualized environments and navigating Linux OS installations.
-Learned how to utilize SCP commands to push local files (index.html) directly into remote server directories.
-Learned how to manage web server states using sudo systemctl commands (start, restart, status, reload).
-Understood the foundational structure of a static HTML document (<!DOCTYPE html>) and how web servers render them.



**Blockers / Questions:**
- Encountered configuration and permission issues when trying to install Nginx and adjust firewall rules (sudo ufw allow 'Nginx Full'). The server service status kept returning errors.
