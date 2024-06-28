/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {Reader, ReaderProvider} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system';
// import RNFS from 'react-native-fs';
// import base64 from './base64';
export function Basic() {
  // const [filePath, setFilePath] = React.useState('');

  // React.useEffect(() => {
  //   const downloadFile = async () => {
  //     const url =
  //       'https://drive.google.com/uc?export=download&id=1e7MVXj3CrNPX3uurFZ_l-pjwHxLl1Nf3'; //this is working innovation
  //     const downloadDest = `${RNFS.DocumentDirectoryPath}/book.epub`;

  //     try {
  //       const download = RNFS.downloadFile({
  //         fromUrl: url,
  //         toFile: downloadDest,
  //       });
  //       const result = await download.promise;

  //       if (result.statusCode === 200) {
  //         console.log('File downloaded successfully: ', downloadDest);
  //         setFilePath(downloadDest);
  //       } else {
  //         console.log('Failed to download file: ', result.statusCode);
  //       }
  //     } catch (error) {
  //       console.log('Error downloading file: ', error);
  //     }
  //   };

  //   downloadFile();
  // }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ReaderProvider>
        {/* <Reader
          src={
            'https://drive.google.com/file/d/1e7MVXj3CrNPX3uurFZ_l-pjwHxLl1Nf3/view?usp=sharing'
          }
          fileSystem={useFileSystem}
        /> */}
        {/* {filePath !== '' && ( */}
          <Reader
            src="https://epubjs-react-native.s3.amazonaws.com/failing-forward.epub"
            fileSystem={useFileSystem}
            flow="scrolled-doc"
          />
        {/* // )} */}
      </ReaderProvider>
    </SafeAreaView>
  );
}
