import React,{useState,useEffect} from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'WFMDatabase.db' });
const createTable = () => {
    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='User_Table'",
            [],
            function (tx, res) {
                console.log('item:', res.rows.length);
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS User_Table', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS User_Table(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(30), user_phone INT(15), user_address VARCHAR(255))',
                        []
                    );
                }
            }
        );
    })
    console.log('SQLite Database and Table Successfully Created...');
};