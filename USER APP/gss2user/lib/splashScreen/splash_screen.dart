import 'dart:async';

import 'package:flutter/material.dart';
import 'package:gss2/authentication/signup_screen.dart';

//import '../mainScreens/main_screen.dart';

  class MysplashScreen extends StatefulWidget
  {
    const MysplashScreen({Key? key}) : super(key: key);
  
    @override
    State<MysplashScreen> createState() => _MysplashScreenState();
  }



  class _MysplashScreenState extends State<MysplashScreen>
  {
    startTimer()
    {
      Timer(const Duration(seconds: 3), () async
      {
      //send users to home screen
      Navigator.push(context, MaterialPageRoute(builder: (c)=> const SignUpScreen()));
      });
    }

    @override
  void initState()
    {
    super.initState();
    startTimer();
    }
    @override
    Widget build(BuildContext context)
    {
      return Material(
        child: Container(
          color: Colors.white,
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [

                //Image.asset("images/logo1.jpg"),

                //const SizedBox(height: 10,),

                const Align(
                  alignment: Alignment.center,
                  child:  Text(
                    "Green Shutlle Service",
                        style: TextStyle(
                      fontSize: 40,
                    color: Colors.green,
                    fontWeight: FontWeight.bold
                  ),
                  ),
                ),
              ],
            ),

          ),
        ),
      );
    }
  }
  