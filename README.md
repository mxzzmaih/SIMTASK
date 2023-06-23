In the project directory, you can utilize the following commands:

npm start
This command launches the application in the development mode. To view the app in your browser, simply open http://localhost:3000. The page will automatically reload whenever you make edits to the code. Additionally, any lint errors will be displayed in the console.

npm test
By executing this command, you can initiate the test runner in an interactive watch mode. It allows you to continuously monitor and run tests as you make changes to the codebase. For more detailed information on running tests, refer to the relevant section.

npm run build
This command is used to build the application for production. It creates an optimized, bundled version of the app in the build folder. React is correctly bundled in production mode, ensuring optimal performance. The build process includes minification of code and assigning unique filenames with hashes. As a result, your app is prepared and ready for deployment.

For further guidance on deployment, consult the appropriate section. It provides additional information and recommendations regarding the deployment process.

npm run eject
Please note that this operation is irreversible. Once you eject, it is not possible to revert back.
In the event that you are dissatisfied with the build tool and configuration options, you have the option to eject at any time. Executing this command removes the single build dependency from your project.

Instead, all configuration files and transitive dependencies (including webpack, Babel, ESLint, and more) will be copied directly into your project. This gives you complete control over these files, allowing you to customize them according to your requirements. All commands, with the exception of eject, will still function as expected. However, they will now point to the copied scripts, enabling you to make any necessary modifications. From this point onwards, you are responsible for maintaining and managing the configuration.

It's important to note that ejecting is not mandatory. The predefined feature set is designed to be suitable for small and medium deployments. You are not obliged to utilize this feature unless you specifically require advanced customization capabilities.
