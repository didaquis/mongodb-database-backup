# didibudget-database-backup


This project contains a small script that allows to obtain a backup copy of the database.


### 📝 Requirements
* Node.js 14.17 or higher

### 📚 How to run the script?
* Use the command: `npm install`.
* Configure the application:
  * Duplicate the configuration file `_env` and rename it as `.env`
  * Edit the file `.env`
* Then use: `npm run backup` to obtain a full backup of your database. 

**Do you need help with `.env` file?** 

Here you have a guide:

| Key | Description |
|-----|-------------|
| MONGO_DNS_SEEDLIST_CONNECTION | Set this value using a DNSseedlist connection format. It should be something like this: mongodb+srv://user:password@uri/database |

### 💻 Tricks for development
* Run the linter: `npm run lint`
* Delete all backups files: `npm run delete_all_backups`


### 📚 Useful links

* https://docs.mongodb.com/database-tools/
* https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/
* https://docs.mongodb.com/manual/core/backups/
* https://www.w3resource.com/mongodb/mongodb-backup-restore.php