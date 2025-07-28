import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Animated,
  ImageBackground,
} from 'react-native';
import Telugu from './Telugu';
import {English} from './English';
import {openDatabase} from 'react-native-sqlite-storage';
import { useTranslation } from 'react-i18next';
import '../../I18nextstyling/i18n';
const Languages = ({navigation}) => {
  const { t: LanguageOpt, i18n } = useTranslation();
  var db = openDatabase({name: 'AssetDatabase.db'});

  useEffect(() => {
    CreateUserDetails_T();
    createRegion_T();
    CreateDistrict_T();
    createCircle_T();
    Create_AssetType_T();
    Create_AssetT();
    Create_AutoReclosures_T();
    Create_DCU_T();
    Create_DTR_T();
    Create_FPI_T();
    Create_FRTU_T();
    Create_Feeder_T();
    Create_MeterT();
    Create_Pole_T();
    Create_Section_T();
    Create_Sectionlisers_T();
  });

  function CreateUserDetails_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_userdetails'",
        [],
        function (tx, res) {
          console.log('User Details is:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_userdetails', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_userdetails(slno INTEGER PRIMARY KEY AUTOINCREMENT,user_name  VARCHAR(20), user_id  VARCHAR(20),user_email VARCHAR(20),user_mobilenumber VARCHAR(20), user_password VARCHAR(10), user_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }

  function createRegion_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Region_Table'",
        [],
        function (tx, res) {
          console.log('Region :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Region_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Region_Table(slno INTEGER PRIMARY KEY AUTOINCREMENT,RegionId VARCHAR(20),RegionName VARCHAR(20),InchargeName VARCHAR(20),InchargeContactNumber VARCHAR(20),Latitude VARCHAR(255),Longitude VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function CreateDistrict_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='District_Table'",
        [],
        function (tx, res) {
          console.log('District :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS District_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS District_Table(slno INTEGER PRIMARY KEY AUTOINCREMENT,DistrictId VARCHAR(20),DistrictName VARCHAR(20),CircleId VARCHAR(20),CircleName VARCHAR(20),RegionId VARCHAR(20),RegionName VARCHAR(20),InchargeName VARCHAR(20),InchargeContactNumber VARCHAR(20),Latitude VARCHAR(255),Longitude VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function createCircle_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Circle_Table'",
        [],
        function (tx, res) {
          console.log('Circle :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Circle_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Circle_Table(slno INTEGER PRIMARY KEY AUTOINCREMENT,CircleId VARCHAR(20),CircleName VARCHAR(20),RegionId VARCHAR(20),RegionName VARCHAR(20),InchargeName VARCHAR(20),InchargeContactNumber VARCHAR(20),Latitude VARCHAR(255),Longitude VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function Create_Section_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Section_Table'",
        [],
        function (tx, res) {
          console.log('Section :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Section_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Section_Table(slno INTEGER PRIMARY KEY AUTOINCREMENT,SectionId VARCHAR(20),SectionName VARCHAR(20),CircleId VARCHAR(20),CircleName VARCHAR(20),RegionId VARCHAR(20),RegionName VARCHAR(20),InchargeName VARCHAR(20),InchargeContactNumber VARCHAR(20),Latitude VARCHAR(255),Longitude VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function Create_AssetT() {}

  function Create_AssetType_T() {}

  function Create_MeterT() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Meter_table'",
        [],
        function (tx, res) {
          console.log('Meter :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Meter_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Meter_table(slno INTEGER PRIMARY KEY AUTOINCREMENT,AssetTypeName VARCHAR(20),MeterId VARCHAR(20),Latitude VARCHAR(20),Longitude VARCHAR(20),Location VARCHAR(20),AssetImage VARCHAR(20),Remarks VARCHAR(255),UserId VARCHAR(20),AndroidImeiId VARCHAR(20),PhaseType VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function Create_DTR_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Dtr_table'",
        [],
        function (tx, res) {
          console.log('DTR :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Dtr_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Dtr_table(slno INTEGER PRIMARY KEY AUTOINCREMENT,AssetTypeName VARCHAR(20),DtrId VARCHAR(20),Latitude VARCHAR(20),Longitude VARCHAR(20),Location VARCHAR(20),AssetImage VARCHAR(20),Remarks VARCHAR(255),UserId VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function Create_TMU_T() {}

  function Create_DCU_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Dcu_table'",
        [],
        function (tx, res) {
          console.log('DCU :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Dcu_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Dcu_table(slno INTEGER PRIMARY KEY AUTOINCREMENT,AssetTypeName VARCHAR(20),DcuId VARCHAR(20),Latitude VARCHAR(20),Longitude VARCHAR(20),Location VARCHAR(20),AssetImage VARCHAR(20),Remarks VARCHAR(255),UserId VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function Create_Feeder_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Feeder_table'",
        [],
        function (tx, res) {
          console.log('Feeder :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Feeder_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Feeder_table(slno INTEGER PRIMARY KEY AUTOINCREMENT,AssetTypeName VARCHAR(20),Feeder_id VARCHAR(20),Latitude VARCHAR(20),Longitude VARCHAR(20),Location VARCHAR(20),AssetImage VARCHAR(20),Remarks VARCHAR(255),UserId VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function Create_RMU_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Rmu_table'",
        [],
        function (tx, res) {
          console.log('RMU :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Rmu_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Rmu_table(slno INTEGER PRIMARY KEY AUTOINCREMENT,AssetTypeName VARCHAR(20),RmuId VARCHAR(20),Latitude VARCHAR(20),Longitude VARCHAR(20),Location VARCHAR(20),AssetImage VARCHAR(20),Remarks VARCHAR(255),UserId VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function Create_AutoReclosures_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='AutoReclosure_table'",
        [],
        function (tx, res) {
          console.log(' AR :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS AutoReclosure_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS AutoReclosure_table(slno INTEGER PRIMARY KEY AUTOINCREMENT,AssetTypeName VARCHAR(20),ArId VARCHAR(20),Latitude VARCHAR(20),Longitude VARCHAR(20),Location VARCHAR(20),AssetImage VARCHAR(20),Remarks VARCHAR(255),UserId VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function Create_Sectionlisers_T() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Sectionaliser_table'",
        [],
        function (tx, res) {
          console.log('Sectionlizer :', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Sectionaliser_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Sectionaliser_table(slno INTEGER PRIMARY KEY AUTOINCREMENT,AssetTypeName VARCHAR(20),SectionaliserId VARCHAR(20),Latitude VARCHAR(20),Longitude VARCHAR(20),Location VARCHAR(20),AssetImage VARCHAR(20),Remarks VARCHAR(255),UserId VARCHAR(20),AndroidImeiId VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }

  function Create_FRTU_T() {}

  function Create_RTU_T() {}

  function Create_Router_T() {}

  function Create_Pole_T() {}

  function Create_FPI_T() {}

  function Create_FPI_T() {}

  let Opacity = new Animated.Value(0);

  useEffect(() => {
    animate();
  });

  const animate = () => {
    Animated.timing(Opacity, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  };
  const changeLanguage = (lang, Language) => {
    i18n.changeLanguage(lang);
    navigation.navigate('Login', { LanguageOpt: LanguageOpt, Language,lang });
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          source={require('../images/mapbackground.jpg')}
          style={StyleSheet.absoluteFillObject}
        />
         <TouchableOpacity
          onPress={() => changeLanguage('en', English)}>
          <Animated.View
            style={[styles.button, {marginTop: 20, opacity: Opacity}]}>
            <Text style={styles.text}>English</Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => changeLanguage('te', Telugu)}>
          <Animated.View
            style={[styles.button, {marginTop: 50, opacity: Opacity}]}>
            <Text style={styles.text}>తెలుగు</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Languages.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 120,
    backgroundColor: '#192442',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});

export default Languages;

{
  /*useEffect(() => {
    //table_userdetails
    //table_assetdetails
    //coloumns --- user_Id ,us er_name,user

   
      db.transaction(function (txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_assetdetails'",
          [],
          function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS table_assetdetails', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_assetdetails(slno INTEGER PRIMARY KEY AUTOINCREMENT,asset_typename VARCHAR(20),asset_name VARCHAR(20), asset_feedername VARCHAR(20), asset_feedernumber VARCHAR(255), asset_latitude VARCHAR(255),asset_longitude VARCHAR(255),mftd_year VARCHAR(20),asset_vendor VARCHAR(20),asset_mftrid VARCHAR(20),asset_mftrname,installationtype VARCHAR(20),capacity VARCHAR(20),mounttype VARCHAR(20),polenumber VARCHAR(20),assetlocation VARCHAR(20),devicetype VARCHAR(20),installationlocation VARCHAR(20),symbol VARCHAR(20))',
                []
              );
            }
          }
        );
      });
    


  

   

 }, []);
*/


   /* db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_assetdetails'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_assetdetails', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_assetdetails(slno INTEGER PRIMARY KEY AUTOINCREMENT,asset_typename VARCHAR(20),column_one VARCHAR(20), column_two VARCHAR(20), column_three VARCHAR(255), column_four VARCHAR(255),column_five VARCHAR(255),column_six VARCHAR(20),column_seven VARCHAR(20),column_eight VARCHAR(20),column_nine VARCHAR(20))',
              []
            );
          }
        }
      );
    });*/
   
   
}
