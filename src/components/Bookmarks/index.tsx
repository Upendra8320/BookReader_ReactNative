/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {ReaderProvider, Reader} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from './Header';
import {BookmarksList} from './BookmarksList';
// import RNFS from 'react-native-fs';

export function Bookmarks() {
  const {width, height} = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  // const [filePath, setFilePath] = React.useState('');

  // React.useEffect(() => {
  //   const checkAndDownloadFile = async () => {
  //     const downloadDest = `${RNFS.DocumentDirectoryPath}/anythign.epub`;
  //     const fileExists = await RNFS.exists(downloadDest);

  //     if (fileExists) {
  //       console.log('File already exists: ', downloadDest);
  //       setFilePath(downloadDest);
  //     } else {
  //       const url = 'https://s3.amazonaws.com/moby-dick/OPS/package.opf';

  //       try {
  //         const download = RNFS.downloadFile({
  //           fromUrl: url,
  //           toFile: downloadDest,
  //         });

  //         const result = await download.promise;

  //         if (result.statusCode === 200) {
  //           console.log('File downloaded successfully: ', downloadDest);
  //           setFilePath(downloadDest);
  //         } else {
  //           console.log('Failed to download file: ', result.statusCode);
  //         }
  //       } catch (error) {
  //         console.log('Error downloading file: ', error);
  //       }
  //     }
  //   };

  //   checkAndDownloadFile();
  // }, []);
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <ReaderProvider>
        <Header onOpenBookmarksList={() => bottomSheetRef.current?.present()} />

        <Reader
          src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
          // src="https://epubjs-react-native.s3.amazonaws.com/failing-forward.epub"
          // src={filePath}
          width={width}
          height={height}
          fileSystem={useFileSystem}
           flow="scrolled-doc"
          // waitForLocationsReady
          onAddBookmark={bookmark => console.log('onAddBookmark', bookmark)}
          onRemoveBookmark={bookmark =>
            console.log('onRemoveBookmark', bookmark)
          }
          onUpdateBookmark={bookmark =>
            console.log('onUpdateBookmark', bookmark)
          }
          onChangeBookmarks={bookmarks =>
            console.log('onChangeBookmarks', bookmarks)
          }
        />

        <BookmarksList
          ref={bottomSheetRef}
          onClose={() => bottomSheetRef.current?.dismiss()}
        />
      </ReaderProvider>
    </GestureHandlerRootView>
  );
}
