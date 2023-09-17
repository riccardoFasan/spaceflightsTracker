import { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import { LaunchDetailed } from '../../models';
import { getLaunch, showErrorMessage } from '../../services';
import { Color, Spacing, flexBoxStyles } from '../../styles';
import { DetailSection, NotificationButton } from '../common';
import { DeatailHeader } from '../layout';

interface Props {
  navigation: any;
  route: any;
}

export const LaunchPage = ({ navigation, route }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [launch, setLaunch] = useState<LaunchDetailed>();

  useEffect(() => {
    const controller = getLaunch(route.params.id);

    async function loadLaunch(): Promise<void> {
      try {
        setLoading(true);
        const launch: LaunchDetailed = await controller.fetch();
        setLaunch(launch);
      } catch (e: unknown) {
        showErrorMessage('Error loading launch');
      } finally {
        setLoading(false);
      }
    }

    loadLaunch();

    return () => controller.cancel();
  }, [route]);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={[styles.spinnerContainer]}>
          <ActivityIndicator size="large" color={Color.LightBlue} />
        </View>
      )}
      {!loading && launch && (
        <>
          <DeatailHeader backLabel="Launches" />
          <ScrollView>
            <Image
              accessibilityLabel={launch.name}
              alt={launch.name}
              style={styles.image}
              resizeMode={'cover'}
              source={{ uri: launch.image }}
              progressiveRenderingEnabled={true}
            />
            <View style={styles.body}>
              {launch.mission && (
                <DetailSection
                  title={launch.mission.name}
                  subtitle="mission"
                  text={launch.mission.description}
                />
              )}
              {launch.launcher && (
                <DetailSection
                  title={launch!.launcher!.name}
                  subtitle="rocket"
                  text={launch!.launcher!.description}
                />
              )}
              {launch.launcher?.company && (
                <DetailSection
                  title={launch.launcher.company.name}
                  subtitle={'manufacturer'}
                  text={launch.launcher.company.description}
                />
              )}
            </View>
          </ScrollView>
          {launch.window?.start && (
            <View style={styles.footer}>
              <NotificationButton launch={launch} />
            </View>
          )}
        </>
      )}
    </View>
  );
};

const dimensions = Dimensions.get('window');
const imageHeight: number = Math.round(dimensions.height / 2.75);
const windowheight = Math.round(dimensions.height);
const bottomBarHeight = Spacing.Large * 2 + 36;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.Black,
  },
  container: {
    backgroundColor: Color.Black,
    minHeight: '100%',
  },
  image: {
    width: '100%',
    height: imageHeight,
  },
  spinnerContainer: {
    ...flexBoxStyles.columnCenter,
    marginBottom: bottomBarHeight / 3,
    height: windowheight,
    marginVertical: 0,
  },
  body: {
    paddingHorizontal: Spacing.ExtraLarge,
    marginBottom: bottomBarHeight,
    paddingBottom: Spacing.ExtraExtraLarge,
    marginTop: Spacing.ExtraExtraLarge,
  },
  footer: {
    position: 'absolute',
    width: '100%',
    top: windowheight - bottomBarHeight,
    padding: Spacing.Large,
    backgroundColor: Color.DarkAnthracite,
  },
});
