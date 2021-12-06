# mongodb-database-backup

This project contains a small script that allows to obtain a backup copy of the database.

> **WARNING** On some systems, the password provided in a connection string may be visible to system status programs such as `ps` that may be invoked by other users!


### 📝 Requirements
* Node.js 14.17 or higher

### 📚 How to run the script?
* Use the command: `npm install`.
* Configure the application:
  * Duplicate the configuration file `_env` and rename it as `.env`
  * Edit the file `.env`
* Then use: `npm run backup` to obtain a full backup of your database. You will get the backup on folder `/backups`. The backup is a compressed file whose name is the current date. For example: `2021-12-06.gz`.

**Do you need help with `.env` file?** 

Here you have a guide:

| Key | Description |
|-----|-------------|
| MONGO_URL | Set this value using a DNS seed list connection format. It should be something like this: mongodb+srv://user:password@uri/database |

### 💻 Tricks for development
* Run the linter: `npm run lint`
* Delete all backups files: `npm run delete_all_backups`


### 📚 How to restore a database on a local instance of MongoDB server using a backup?
The following command will import the database backup to the mongod instance running on the localhost interface (port 27017). Here is the command. Note that this command will delete the database before restoring the backup:
`mongorestore --drop --archive=backups/2021-12-06.gz --gzip`

If you prefer rename your database during restoration process, use this command instead:
```sh
# Change the value  of XXXXXXXX to the current database name
# Change the value  of ZZZZZZZZ to the desired database name
mongorestore --drop --nsFrom='XXXXXXXX.*' --nsTo='ZZZZZZZZ.*' --archive=backups/2021-12-06.gz --gzip
```

### 📚 How to restore a database on a cloud instance of MongoDB server using a backup?
The following command will restore the database on a cloud instance. Note that this command will delete the database before restoring the backup:
`mongorestore --drop --uri=mongodb+srv://<user>:<password>@<uri>/<database> --archive=backups/2021-12-06.gz --gzip`

If you prefer rename your database during restoration process, use this command instead:
```sh
# Change the value  of XXXXXXXX to the current database name
# Change the value  of ZZZZZZZZ to the desired database name
mongorestore --drop --uri=mongodb+srv://<user>:<password>@<uri>/<database> --nsFrom='XXXXXXXX.*' --nsTo='ZZZZZZZZ.*' --archive=backups/2021-12-06.gz --gzip
```

### 📚 Useful links

* https://docs.mongodb.com/database-tools/
* https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/
* https://docs.mongodb.com/manual/core/backups/
