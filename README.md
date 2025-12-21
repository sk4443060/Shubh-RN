<!-- REACT NATIVE GUIDE --># Shubh-RN
# OFFICIAL DOCS AND THEIR PURPOSE:
    01. React Native: https://reactnative.dev
                    https://reactnative.dev/docs/environment-setup
                    https://reactnative.dev/docs/set-up-your-environment
                            <!-- #Chocolatey -->
                            <!-- https://chocolatey.org/install -->
                            - Click on Chocolatey inside Node, JDK
                            - Click on "Install" from Navbar
                            - Now copy "Get-ExecutionPolicy"
                            - Now copy from "Now run the following command"
                                >Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
                                .
                            <!-- #Install Android Studio -->
                            <!-- https://developer.android.com/studio -->
                            - Visit the given link
                            - Click on: Download Android Studio Otter 2 Feature Drop
                            - Check the License Agreement
                            - Now click the "Download button"
                            #NOTE: Configure Android Studio as:
                            ----------------------------------------------
                            - After installation run the Android Studio
                            - Click on: More Actions
                            - Click on SDK Manager
                            - Select Android 11.0("R") under SDK Platform Tab
                            - Now click on next tab "SDK Tools"
                            - Check the following:
                                Android SDK Command-line Tools (Latest)
                                Android SDK Platform-Tools
                            - Click on OK
                            - Again OK
                            - Accept Consent
                            - Click on Next Button
                            - After successfull installation click on "Finish" button
                            #NOTE: Create Virtual Device
                            ----------------------------------------------
                            - Click on: More Actions
                            - Click on: Virtual Device Manager
                            - Click on: +
                            - Select Pixel 8 Pro under phone tab
                            - Next
                            - Select: API 35 (If there is no such thing move the next and select "R")
                            - Click: Next
                            #NOTE: Edit User Variable 
                            ----------------------------------------------
                            - Click on Start menu in your window
                            - Type: env
                            - Click on System Environment Variable
                            - Click on: Environment Variable button
                            - Under System Variable Click on "New" button
                            - Add: ANDROID_HOME inside variable name input field
                            - Enter Variable Value: C\Users\<Your User or system Name>\AppData\Local\Android\Sdk
                            - Click: OK, OK...
       
    02. Creating first project by follow this link:
        Link:

            https://reactnative.dev/docs/environment-setup

        OR Directly use the command:

            npx create-expo-app@latest

        OR Move forward by clicking on the "Continue with Expo"
        After this you will be landed on the "Expo Official Documentation"
        You can also navigate directly by visiting this url:

            https://docs.expo.dev/get-started/set-up-your-environment/

        And click on "Expo logo", It will navigate you to at "https://expo.dev"
        Next click on button: Read the Docs

# CLASSES AND ITS CORE CONTENT
# -----------------------------------------------
# Class 01:
    - Creating project using:

        npx create-expo-app@latest

    - Running Project

        npm start

    > NOTE: Your system and Mobile must connected with the same network and also installed expo in your mobile device.

    - Scan the QR using your expo app
    - You have successfully launched your first mobile app.
# -----------------------------------------------
# Class 02: Intro of the file and folder structure
    -app       : We store only the app screens like Home, About Us etc
    -assets    : We stores fonts, images and general html etc... (Which is static)
    -components: Piece of codes and its functionality etc
    -constant  : We stores the constant values in this file

                    eg,
                    const tintColorLight = '#0a7ea4';
                    const tintColorDark = '#fff';

                    export const Colors = {
                        light: {
                            text: '#11181c',
                            background: '#fff',
                            tint: tintColorLight,
                            icon: '#687076',
                            tabIconDefault: '#687076',
                            tabIconSelected: tintColorLight, 
                        }
                    }

                    export const Fonts = Platform.select({
                        ios: {
                            /** iOS `UIFontDescriptorSystemDesignDefault` */
                            sans: 'system-ui',
                            /** iOS `UIFontDescriptorSystemDesignSerif` */
                            serif: 'ui-serif',
                            /** iOS `UIFontDescriptorSystemDesignRounded` */
                            rounded: 'ui-rounded',
                            /** iOS `UIFontDescriptorSystemDesignMonospaced` */
                            mono: 'ui-monospace',
                        },
                        default: {
                            sans: 'normal',
                            serif: 'serif',
                            rounded: 'normal',
                            mono: 'monospace',
                        },
                        web: {
                            sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                            serif: "Georgia, 'Times New Roman', serif",
                            rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
                            mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                        },
                    });

    - Rest of the files you know very well

    > CLEAN THE DEFAULT FILES AND FOLDERS AT INITIAL (REMOVE ALL THESE)
        - expo
        - app
        - assets
        - components
        - constants
        - hooks
        - scripts

    - Create src folder inside root directory
    - Create app inside src
    - Inside src create Index.tsx
    - Write your code as:

        import { View, Text } from 'react-native'
        import React from 'react'

        const Index = () => {
            return (
                <View>
                    <Text>Index</Text>
                </View>
            )
        }

        export default Index

        OR, Type: rnfe and hit enter. This will give the same code as above

# Class 03: Components Guide
    Definition: Components are independent & reusable bits of code. They serve the same purpose as JS functions, but work in isolation and return HTML.

    - Skeleton/Syntex to write the component as:

        const ComponentName = () => {
            return <Text>Component</Text>;
        };

        OR,

        function Index() {
            return <Text>Component</Text>;
        }

        > NOTE: Do not forgot to import

            import { Text } from "react-native";  <- Add this at top most
            export default Index;                 <- Add at the last of the component

# class03practice:
    - Create and practice the components 