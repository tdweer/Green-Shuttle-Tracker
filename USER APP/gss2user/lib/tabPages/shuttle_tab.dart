import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:location/location.dart';

class ShuttleTabPage extends StatefulWidget {
  const ShuttleTabPage({Key? key}) : super(key: key);

  @override
  State<ShuttleTabPage> createState() => _ShuttleTabPageState();
}

class _ShuttleTabPageState extends State<ShuttleTabPage> {
  GoogleMapController? _controller;
  Location _location = Location();
  final LatLng _center = const LatLng(6.8416, 80.0031);

  void _onMapCreated(GoogleMapController controller) {
    _controller = controller;
  }

  void _onLocationChanged(LocationData currentLocation) {
    if (_controller != null) {
      _controller!.animateCamera(
        CameraUpdate.newCameraPosition(
          CameraPosition(
            target: LatLng(currentLocation.latitude!, currentLocation.longitude!),
            zoom: 15.0,
          ),
        ),
      );
    }
  }

  @override
  void initState() {
    super.initState();
    _location.onLocationChanged.listen(_onLocationChanged);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GoogleMap(
        onMapCreated: _onMapCreated,
        initialCameraPosition: CameraPosition(
          target: _center,
          zoom: 15.0,
        ),
        myLocationEnabled: true,
      ),
    );
  }
}
