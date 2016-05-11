'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, function (answers) {
      this.props = answers;
      this.log(answers.name);
      done();
    }.bind(this));
  },
  //Writing Logic here
  writing: {
    //copyTpl application files
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_Xamarin_app/_Properties/_AssemblyInfo.cs'),
        this.destinationPath(this.props.name + '_app/Properties/AssemblyInfo.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Xamarin_app/_App.cs'),
        this.destinationPath(this.props.name + '_app/App.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Xamarin_app/_Constants.cs'),
        this.destinationPath(this.props.name + '_app/Constant.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Xamarin_app/_packages.config'),
        this.destinationPath(this.props.name + '_app/packages.config'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Xamarin_app/_Xamarin_app.csproj'),
        this.destinationPath(this.props.name + '_app/' + this.props.name + '.csproj'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Xamarin_app.sln'),
        this.destinationPath(this.props.name + '.sln'), {
          name: this.props.name
        }
      );
    },
    //Copy iOS files
    ios: function () {
      /*
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Default.png'),
        this.destinationPath('iOS/Resources/Default.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Default-568@2x.png'),
        this.destinationPath('iOS/Resources/Default-568@2x.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Default-Portrait.png'),
        this.destinationPath('iOS/Resources/Default-Portrait.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Default-Portrait@2x.png'),
        this.destinationPath('iOS/Resources/Default-Portrait@2x.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Default@2x.png'),
        this.destinationPath('iOS/Resources/Default@2x.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-60@2x.png'),
        this.destinationPath('iOS/Resources/Icon-60@2x.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-60@3x.png'),
        this.destinationPath('iOS/Resources/Icon-60@3x.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-76.png'),
        this.destinationPath('iOS/Resources/Icon-76.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-76@2x.png'),
        this.destinationPath('iOS/Resources/Icon.png-76@2x'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-Small.png'),
        this.destinationPath('iOS/Resources/Icon-Small.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-Small-40.png'),
        this.destinationPath('iOS/Resources/Icon-Small-40.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-Small-40@2x.png'),
        this.destinationPath('iOS/Resources/Icon-Small-40@2x.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-Small-40@3x.png'),
        this.destinationPath('iOS/Resources/Icon-Small-40@3x.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-Small@2x.png'),
        this.destinationPath('iOS/Resources/Icon-Small@2x.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_Icon-Small@3x.png'),
        this.destinationPath('iOS/Resources/Icon-Small@3x.png'), {
          name: this.props.name
        }
      );
      */
      this.fs.copyTpl(
        this.templatePath('_iOS/_Resources/_LaunchScreen.storyboard'),
        this.destinationPath('iOS/Resources/LaunchScreen.storyboard'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_AppDelegate.cs'),
        this.destinationPath('iOS/AppDelegate.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Entitlements.plist'),
        this.destinationPath('iOS/Entitlements.plist'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Info.plist'),
        this.destinationPath('iOS/Info.plist'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_ITunesArtwork'),
        this.destinationPath('iOS/ITunesArtwork'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_ITunesArtwork@2x'),
        this.destinationPath('iOS/ITunesArtwork@2x'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Main.cs'),
        this.destinationPath('iOS/Main.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_packages.config'),
        this.destinationPath('iOS/packages.config'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_iOS/_Xamarin_app.iOS.csproj'),
        this.destinationPath('iOS/' + this.props.name + '.iOS.csproj'), {
          name: this.props.name
        }
      );
    },
    //Copy Windows Phone files
    Win: function () {
      this.fs.copyTpl(
        this.templatePath('_WinApp/_Assets/_Logo.scale-100.png'),
        this.destinationPath('WinApp/Assets/Logo.scale-100.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_Assets/_SmallLogo.scale-100.png'),
        this.destinationPath('WinApp/Assets/SmallLogo.scale-100.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_Assets/_SplashScreen.scale-100.png'),
        this.destinationPath('WinApp/Assets/SplashScreen.scale-100.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_Assets/_StoreLogo.scale-100.png'),
        this.destinationPath('WinApp/Assets/StoreLogo.scale-100.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_Properties/_AssemblyInfo.cs'),
        this.destinationPath('WinApp/Properties/AssemblyInfo.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_App.xaml'),
        this.destinationPath('WinApp/App.xaml'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_App.xaml.cs'),
        this.destinationPath('WinApp/App.xaml.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_MainPage.xaml'),
        this.destinationPath('WinApp/MainPage.xaml'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_MainPage.xaml.cs'),
        this.destinationPath('WinApp/MainPage.xaml.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_Package.appxmanifest'),
        this.destinationPath('WinApp/Package.appxmanifest'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_packages.config'),
        this.destinationPath('WinApp/packages.config'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_WinApp_TemporaryKey.pfx'),
        this.destinationPath('WinApp/WinApp_TemporaryKey.pfx'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinApp/_Xamarin_app.WinApp.csproj'),
        this.destinationPath('WinApp/' + this.props.name + '.WinApp.csproj'), {
          name: this.props.name
        }
      );
    },
    //Copy Windows 8.1 Phone files
    Win81: function () {
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_Assets/_Logo.scale-240.png'),
        this.destinationPath('WinPhone81/Assets/Logo.scale-240.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_Assets/_SmallLogo.scale-240.png'),
        this.destinationPath('WinPhone81/Assets/SmallLogo.scale-240.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_Assets/_SplashScreen.scale-240.png'),
        this.destinationPath('WinPhone81/Assets/SplashScreen.scale-240.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_Assets/_Square71x71Logo.scale-240.png'),
        this.destinationPath('WinPhone81/Assets/Square71x71Logo.scale-240.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_Assets/_StoreLogo.scale-240.png'),
        this.destinationPath('WinPhone81/Assets/StoreLogo.scale-240.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_Assets/_WideLogo.scale-240.png'),
        this.destinationPath('WinPhone81/Assets/WideLogo.scale-240.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_Properties/_AssemblyInfo.cs'),
        this.destinationPath('WinPhone81/Properties/AssemblyInfo.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_app.config'),
        this.destinationPath('WinPhone81/app.config'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_App.xaml'),
        this.destinationPath('WinPhone81/App.xaml'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_App.xaml.cs'),
        this.destinationPath('WinPhone81/App.xaml.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_MainPage.xaml'),
        this.destinationPath('WinPhone81/MainPage.xaml'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_MainPage.xaml.cs'),
        this.destinationPath('WinPhone81/MainPage.xaml.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_Package.appxmanifest'),
        this.destinationPath('WinPhone81/Package.appxmanifest'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_packages.config'),
        this.destinationPath('WinPhone81/packages.config'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_WinPhone81/_Xamarin_app.WinPhone81.csproj'),
        this.destinationPath('WinPhone81/' + this.props.name + '.WinPhone81.csproj'), {
          name: this.props.name
        }
      );
    },
    //Copy Android files
    droid: function () {
      this.fs.copyTpl(
        this.templatePath('_Droid/_Assets/_AboutAssets.txt'),
        this.destinationPath('Droid/Assets/AboutAssets.txt'), {
          name: this.props.name
        }
      );
      
      this.fs.copyTpl(
        this.templatePath('_Droid/_Properties/_AndroidManifest.xml'),
        this.destinationPath('Droid/Properties/AndroidManifest.xml'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Droid/_Properties/_AssemblyInfo.cs'),
        this.destinationPath('Droid/Properties/AssemblyInfo.cs'), {
          name: this.props.name
        }
      );
      
      this.fs.copyTpl(
        this.templatePath('_Droid/_Resources/_drawable/_icon.png'),
        this.destinationPath('Droid/Resources/drawable/icon.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Droid/_Resources/_drawable-hdpi/_icon.png'),
        this.destinationPath('Droid/Resources/drawable-hdpi/icon.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Droid/_Resources/_drawable-xhdpi/_icon.png'),
        this.destinationPath('Droid/Resources/drawable-xhdpi/icon.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Droid/_Resources/_drawable-xxhdpi/_icon.png'),
        this.destinationPath('Droid/Resources/drawable-xxhdpi/icon.png'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Droid/_Resources/_AboutResources.txt'),
        this.destinationPath('Droid/Resources/AboutResources.txt'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Droid/_Resources/_Resource.designer.cs'),
        this.destinationPath('Droid/Resources/Resource.designer.cs'), {
          name: this.props.name
        }
      );
      
      this.fs.copyTpl(
        this.templatePath('_Droid/_MainActivity.cs'),
        this.destinationPath('Droid/MainActivity.cs'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Droid/_packages.config'),
        this.destinationPath('Droid/packages.config'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_Droid/_Xamarin_app.Droid.csproj'),
        this.destinationPath('Droid/' + this.props.name +'.Droid.csproj'), {
          name: this.props.name
        }
      );
    }
  },
  install: function () {
    this.installDependencies();
  }
});

