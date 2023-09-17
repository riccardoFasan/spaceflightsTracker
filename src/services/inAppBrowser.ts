import InAppBrowser from 'react-native-inappbrowser-reborn';

export async function openURL(url: string): Promise<void> {
  await InAppBrowser.open(url);
}
