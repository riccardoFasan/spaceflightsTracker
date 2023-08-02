import { useEffect, useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { LaunchDetailed } from '../../models';
import { getLaunch, showErrorMessage } from '../../services';
import { Color, Spacing, flexBoxStyles } from '../../styles';
import { DetailSection, LaunchStatusBadge } from '../common';
import { DeatailHeader } from '../layout';

interface Props {
  navigation: any;
  route: any;
}

export const LaunchPage = ({ navigation, route }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [launch, setLaunch] = useState<LaunchDetailed>();

  useEffect(() => {
    const id: string = route.params.id;
    loadLaunch(id);
  }, [route]);

  async function loadLaunch(id: string): Promise<void> {
    try {
      setLoading(true);
      const launch: LaunchDetailed = await getLaunch(id);
      setLaunch(launch);
    } catch (e: unknown) {
      showErrorMessage('Error loading launch');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {loading && (
        <View style={[styles.spinnerContainer]}>
          <ActivityIndicator size="large" color={Color.LightBlue} />
        </View>
      )}
      {!loading && launch && (
        <>
          <DeatailHeader title={launch?.name || 'Launch'} />
          <ScrollView>
            <Image
              accessibilityLabel={launch.name}
              alt={launch.name}
              style={styles.image}
              resizeMode={'cover'}
              source={{ uri: launch.image }}
              progressiveRenderingEnabled={true}
            />
            <LaunchStatusBadge launch={launch} />
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
                  subtitle={`manufacturer`}
                  text={launch.launcher.company.description}
                />
              )}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

const dimensions = Dimensions.get('window');
const imageHeight: number = Math.round(dimensions.height / 2.75);
const windowheight = Math.round(dimensions.height);
const bottomBarHeight = 100;

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
    height: windowheight - bottomBarHeight,
    marginVertical: 0,
  },
  body: {
    paddingHorizontal: Spacing.ExtraLarge,
    marginBottom: Spacing.ExtraExtraLarge,
    marginTop: Spacing.ExtraExtraLarge,
  },
});
