import 'package:flutter/material.dart';
import 'dart:async';

class HomeTabPage extends StatefulWidget {
  const HomeTabPage({Key? key}) : super(key: key);

  @override
  State<HomeTabPage> createState() => _HomeTabPageState();
}

class _HomeTabPageState extends State<HomeTabPage> {
  String _currentTime = '';
  String _currentDate = '';

  @override
  void initState() {
    super.initState();
    Timer.periodic(Duration(seconds: 1), (timer) {
      _getCurrentTime();
    });
    _getCurrentDate();
  }

  void _getCurrentTime() {
    final DateTime now = DateTime.now();
    final int hour = now.hour;
    String greeting = '';
    if (hour < 12) {
      greeting = 'Good morning !';
    } else if (hour < 18) {
      greeting = 'Good afternoon !';
    } else {
      greeting = 'Good evening !';
    }

    final String formattedTime = '${now.hour}:${now.minute}:${now.second}';
    setState(() {
      _currentTime = '$greeting, it is $formattedTime';


      //_currentTime = formattedTime;

    });
  }

  void _getCurrentDate() {
    final DateTime now = DateTime.now();
    final String formattedDate = '${now.year}-${now.month}-${now.day}';
    setState(() {
      _currentDate = formattedDate;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const SizedBox(height: 150
          ,),
        Padding(
          padding: EdgeInsets.symmetric(vertical: 16),
          child: Column(
            children: [
              Text(
                _currentTime,
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              Text(
                _currentDate,
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            ],
          ),
        ),
        Column(
          children: [
            const SizedBox(height: 20),
            Center(
              child: Column(
                children: [
                  Container(
                    color: Colors.blue[400],
                    height: 100,
                    child: Row(
                      children: [
                        Padding(
                          padding: const EdgeInsets.only(left: 24.0),
                          child: Text(
                            '001',
                            textAlign: TextAlign.center,
                            style: const TextStyle(color: Colors.white,fontSize: 24),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 56.0),
                          child: Text(
                            'NC 5678',
                            textAlign: TextAlign.center,
                            style: const TextStyle(color: Colors.white,fontSize: 24),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 72.0),
                          // child: ElevatedButton(
                          //
                          //   onPressed: () {},
                          //   style: ElevatedButton.styleFrom(
                          //     primary: Colors.green,
                          //   ),
                          //   child: Text('START'),
                          //
                          // ),
                        ),
                      ],
                    ),
                    width: 390,
                  ),
                ],
              ),

            ),
            Column(
              children: [
                const SizedBox(height: 20),
                Container(
                  color: Colors.blue[400],
                  height: 100,
                  child: Row(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(left: 24.0),
                        child: Text(
                          '002',
                          textAlign: TextAlign.center,
                          style: const TextStyle(color: Colors.white,fontSize: 24),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 56.0),
                        child: Text(
                          'ND 5689',
                          textAlign: TextAlign.center,
                          style: const TextStyle(color: Colors.white,fontSize: 24),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 72.0),
                        // child: ElevatedButton(
                        //
                        //   onPressed: () {},
                        //   style: ElevatedButton.styleFrom(
                        //     primary: Colors.green,
                        //   ),
                        //   child: Text('START'),
                        //
                        // ),
                      ),
                    ],
                  ),
                  width: 390,
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }
}
