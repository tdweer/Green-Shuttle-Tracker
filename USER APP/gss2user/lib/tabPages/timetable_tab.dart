import 'package:flutter/material.dart';

class TimetableTabPage extends StatefulWidget
{
  const TimetableTabPage({Key? key}) : super(key: key);

  @override
  State<TimetableTabPage> createState() => _TimetableTabPageState();
}

class _TimetableTabPageState extends State<TimetableTabPage>
{
  @override
  Widget build(BuildContext context)
  {
    return Padding(
      padding: const EdgeInsets.only(top: 200),
      child: Table(
        border: TableBorder.all(width: 1.0, color: Colors.black),
        children: [
          TableRow(
            children: [
              TableCell(
                child: Text('TIME'),
              ),
              TableCell(
                child: Text('  7.30 am'),
              ),
              TableCell(
                child: Text('  8.30 am'),
              ),
              TableCell(
                child: Text('  9.00 am'),
              ),
              TableCell(
                child: Text('  10.30 am'),
              ),
            ],
          ),
          TableRow(
            children: [
              TableCell(
                child: Text(' MONDAY'),
              ),
              TableCell(
                child: Text('  ND 4957'),
              ),
              TableCell(
                child: Text('  ND 9904'),
              ),
              TableCell(
                child: Text('  ND 8740'),
              ),
              TableCell(
                child: Text('  NC 4734'),
              ),
            ],
          ),
          TableRow(
            children: [
              TableCell(
                child: Text(' TUESDAY'),
              ),
              TableCell(
                child: Text('  ND 4957'),
              ),
              TableCell(
                child: Text('  ND 9904'),
              ),
              TableCell(
                child: Text('  ND 8740'),
              ),
              TableCell(
                child: Text('  NC 4734'),
              ),
            ],
          ),
          TableRow(
            children: [
              TableCell(
                child: Text(' WEDNSDAY'),
              ),
              TableCell(
                child: Text('  ND 4957'),
              ),
              TableCell(
                child: Text('  ND 9904'),
              ),
              TableCell(
                child: Text('  ND 8740'),
              ),
              TableCell(
                child: Text('  NC 4734'),
              ),
            ],
          ),
          TableRow(
            children: [
              TableCell(
                child: Text(' THURSDAY'),
              ),
              TableCell(
                child: Text('  ND 4957'),
              ),
              TableCell(
                child: Text('  ND 9904'),
              ),
              TableCell(
                child: Text('  ND 8740'),
              ),
              TableCell(
                child: Text('  NC 4734'),
              ),
            ],
          ),
          TableRow(
            children: [
              TableCell(
                child: Text(' FRIDAY'),
              ),
              TableCell(
                child: Text('  ND 4957'),
              ),
              TableCell(
                child: Text('  ND 9904'),
              ),
              TableCell(
                child: Text('  ND 8740'),
              ),
              TableCell(
                child: Text('  NC 4734'),
              ),
            ],
          ),
          TableRow(
            children: [
              TableCell(
                child: Text(' SATURDAY'),
              ),
              TableCell(
                child: Text('  ND 4957'),
              ),
              TableCell(
                child: Text('  ND 9904'),
              ),
              TableCell(
                child: Text('  ND 8740'),
              ),
              TableCell(
                child: Text('  NC 4734'),
              ),
            ],
          ),
          TableRow(
            children: [
              TableCell(
                child: Text(' SUNDAY'),
              ),
              TableCell(
                child: Text('  ND 4957'),
              ),
              TableCell(
                child: Text('  ND 9904'),
              ),
              TableCell(
                child: Text('  ND 8740'),
              ),
              TableCell(
                child: Text('  NC 4734'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}