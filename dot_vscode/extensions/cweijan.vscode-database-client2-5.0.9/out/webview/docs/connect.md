## Connect

1. Open Database Explorer panel, then click the `+` button.
2. Select your server type, input connection config then click the connect button.

![connection](images/connection.jpg)

This extension will create two panels, because in some cases it is necessary to view both SQL and NoSQL data. The panel can be dragged into the other by long-pressing.

## Cache

In order to improve performance, the database information is cached. If your database structure changes externally, you need to click the refresh button to refresh the cache。

![img](images/1638342622208.png)

## Connection Notes

### SQL Server

If you want to connect to your local SQL Server through a port, you usually need to enable the TCP/IP connection method. For details, see:

[Configure a Server to Listen on a Specific TCP Port - SQL Server | Microsoft Docs](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver15#SSMSProcedure)

### SQLite

1. SQLite relies on SQLite external programs to connect, if your operating system is not windows, you need to make sure you have sqlite3 in your environment variables.
2. If you get the error "unknown command or invalid arguments: "open"." when using sqlite, please consider downgrading your sqlite3 version, in some sqlite3 versions the .open command is removed, but the extension requires the open command to support unicode character.

### MongoDB

MongoDB has less support and is only recommended for browsing data.

## Filter

Quickly filter tables, VSCode does not support creating input boxes, so this is the only way.

![filter](images/filter.gif)
