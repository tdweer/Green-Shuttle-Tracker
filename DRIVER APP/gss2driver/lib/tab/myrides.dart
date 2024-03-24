import 'package:flutter/material.dart';

class MyRides extends StatefulWidget {
  const MyRides({Key? key}) : super(key: key);

  @override
  State<MyRides> createState() => _MyRidesState();
}

class _MyRidesState extends State<MyRides> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: const Text("Green Shuttle Service")),
      body:Column(
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
                        child: ElevatedButton(

                          onPressed: () {},
                        style: ElevatedButton.styleFrom(
                          primary: Colors.green,
                        ),
                          child: Text('START'),

                        ),
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
                      child: ElevatedButton(

                        onPressed: () {},
                        style: ElevatedButton.styleFrom(
                          primary: Colors.green,
                        ),
                        child: Text('START'),

                      ),
                    ),
                  ],
                ),
                width: 390,
              ),
            ],
          ),
        ],
      ),
    );
  }
}
