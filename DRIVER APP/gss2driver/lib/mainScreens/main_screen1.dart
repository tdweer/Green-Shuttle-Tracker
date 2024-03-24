import 'dart:async';

import 'package:flutter/material.dart';
import 'package:gss2/tab/profile.dart';

import '../tab/myrides.dart';


class MainScreen extends StatefulWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> with SingleTickerProviderStateMixin {
  TabController? tabController;
  int selectedIndex = 0;

  onItemClicked(int index) {
    setState(() {
      selectedIndex = index;
      tabController!.index = selectedIndex;
    });
  }

  @override
  void initState() {
    super.initState();
    tabController = TabController(length: 4, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: const Text("Green Shuttle Service")),
      body: Column(
        children: [
          const SizedBox(height: 20),
          Column(
            children: [

              Container(

                color: Colors.blue[400],
                height: 100,
                width: 390,
                child: StreamBuilder(
                  stream: Stream.periodic(const Duration(seconds: 1), (_) => DateTime.now()),
                  builder: (context, snapshot) {
                    return Center(
                      child: Row(
                        children: [
                          Padding(
                            padding: const EdgeInsets.only(left: 36.0),
                            child: Text(
                              '${snapshot.data!.hour}:${snapshot.data!.minute}:${snapshot.data!.second}',
                              textAlign: TextAlign.left,

                              style: const TextStyle(color: Colors.white, fontSize: 30),
                            ),
                          ),
    Padding(
      padding: const EdgeInsets.only(left: 60.0),

      child: Text(

          '${snapshot.data!.day}/${snapshot.data!.month}/${snapshot.data!.year}',
        textAlign: TextAlign.right,

        style: const TextStyle(color: Colors.white, fontSize: 30),

      ),
    )
                        ],
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
          Row(
            children: [
              Expanded(
                child: Column(
                  children: [
                    const SizedBox(height: 20),
                    GestureDetector(
                      onTap: () {
                        Navigator.push(context, MaterialPageRoute(builder: (c) => const MyRides()));
                      },
                      child: Container(
                        color: Colors.blue[400],
                        height: 180,
                        width: 180,
                        child: Center(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: const [
                              Icon(
                                Icons.bus_alert,
                                color: Colors.white,
                                size: 80,
                              ),
                              SizedBox(height: 10),
                              Text(
                                'MY RIDES',
                                style: TextStyle(color: Colors.white,fontSize: 24),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Expanded(
                child: Column(
                  children: [
                    const SizedBox(height: 20),
                    GestureDetector(
                       onTap: () {
                         Navigator.push(context, MaterialPageRoute(builder: (c) => const ProfileTabPage()));
                       },
                      child: Container(
                        color: Colors.green[400],
                        height: 180,
                        width: 180,
                        child: Center(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: const [
                              Icon(
                                Icons.person,
                                color: Colors.white,
                                size: 80,
                              ),
                              SizedBox(height: 10),
                              Text(
                                'PROFILE',
                                style: TextStyle(color: Colors.white,fontSize: 24),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),

            ],
          ),
          const SizedBox(height: 20),
          Column(
            children: [
              Container(
                color: Colors.green,
                height: 250,
                width: 390,
                child: const Center(
                  child: Text(
                    'seat availblty',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),
            ],
          ),
          Column(
            children: [
              const SizedBox(height: 20),
              GestureDetector(
                 // onTap: () {
                 //   Navigator.push(context, MaterialPageRoute(builder: (c) => MyRides()));
                 // },
                child: Container(
                  color: Colors.green,
                  height: 150,
                  width: 390,
                  child: const Center(
                    child: Text(
                      'Full',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
