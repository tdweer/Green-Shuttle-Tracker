import 'package:flutter/material.dart';
import 'package:gss2/tabPages/shuttle_tab.dart';
import 'package:gss2/tabPages/home_tab.dart';
import 'package:gss2/tabPages/profile_tab.dart';
import 'package:gss2/tabPages/timetable_tab.dart';

class MainScreen extends StatefulWidget
{

  @override
  _MainScreenState createState() => _MainScreenState();
}






class _MainScreenState extends State<MainScreen> with SingleTickerProviderStateMixin
{
  TabController? tabController;
  int selectedIndex = 0;

  onItemClicked(int index)
  {
    setState(() {
      selectedIndex = index;
      tabController!.index = selectedIndex;
    });
  }

   @override
  void initState() {
    super.initState();
    tabController =  TabController(length: 4, vsync: this);

  }

  @override
  Widget build(BuildContext context)
  {
    return Scaffold(
        body: TabBarView(
          physics: const NeverScrollableScrollPhysics(),
          controller: tabController,
          children: const [
              HomeTabPage(),
            ShuttleTabPage(),
              TimetableTabPage(),

              ProfileTabPage(),
          ],

        ),
        bottomNavigationBar: BottomNavigationBar(
          items: const [

            BottomNavigationBarItem(
              icon: Icon(Icons.dashboard_sharp),
              label: "DASHBOARD",
            ),

            BottomNavigationBarItem(
              icon: Icon(Icons.bus_alert),
              label: "Shuttle",
            ),

            BottomNavigationBarItem(
              icon: Icon(Icons.punch_clock_rounded),
              label: "Timtetable",
            ),

            BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: "Profile",
            ),
          ],

          unselectedItemColor: Colors.white,
          selectedItemColor: Colors.green,
          backgroundColor: Colors.black,
          type: BottomNavigationBarType.fixed,
          selectedLabelStyle: const TextStyle(fontSize: 14),
          showUnselectedLabels: true,
          currentIndex: selectedIndex,
          onTap: onItemClicked,
        ),
    );
  }
}
