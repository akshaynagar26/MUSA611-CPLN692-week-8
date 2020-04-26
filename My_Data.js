{
  "routes": [
    {
      "weight_name": "routability",
      "legs": [
        {
          "summary": "North 30th Street, Market Street",
          "steps": [
            {
              "intersections": [
                {
                  "classes": [
                    "tunnel"
                  ],
                  "bearings": [
                    10
                  ],
                  "location": [
                    -75.182579,
                    39.955879
                  ],
                  "entry": [
                    true
                  ],
                  "geometry_index": 0,
                  "out": 0
                },
                {
                  "entry": [
                    true,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.182549,
                    39.956013
                  ],
                  "geometry_index": 1,
                  "in": 1,
                  "bearings": [
                    9,
                    190
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    true,
                    false,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.182503,
                    39.956234
                  ],
                  "geometry_index": 2,
                  "in": 1,
                  "bearings": [
                    10,
                    189,
                    222
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    true,
                    false,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.18248,
                    39.956337
                  ],
                  "geometry_index": 3,
                  "in": 1,
                  "bearings": [
                    10,
                    190,
                    253
                  ],
                  "duration": 5.25
                },
                {
                  "entry": [
                    true,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.182465,
                    39.956406
                  ],
                  "geometry_index": 4,
                  "in": 1,
                  "bearings": [
                    9,
                    190
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    true,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.182373,
                    39.956844
                  ],
                  "geometry_index": 5,
                  "in": 1,
                  "bearings": [
                    9,
                    189
                  ],
                  "duration": 5.25
                }
              ],
              "name": "",
              "distance": 120.665,
              "maneuver": {
                "bearing_after": 10,
                "type": "depart",
                "bearing_before": 0,
                "location": [
                  -75.182579,
                  39.955879
                ],
                "instruction": "Head north"
              },
              "weight": 49.551,
              "geometry": {
                "coordinates": [
                  [
                    -75.182579,
                    39.955879
                  ],
                  [
                    -75.182549,
                    39.956013
                  ],
                  [
                    -75.182503,
                    39.956234
                  ],
                  [
                    -75.18248,
                    39.956337
                  ],
                  [
                    -75.182465,
                    39.956406
                  ],
                  [
                    -75.182373,
                    39.956844
                  ],
                  [
                    -75.18235,
                    39.956955
                  ]
                ],
                "type": "LineString"
              },
              "duration": 49.551,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.18235,
                    39.956955
                  ],
                  "geometry_index": 6,
                  "in": 1,
                  "bearings": [
                    101,
                    189,
                    278
                  ],
                  "duration": 10
                }
              ],
              "name": "",
              "distance": 53,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.18235,
                  39.956955
                ],
                "bearing_before": 9,
                "modifier": "left",
                "bearing_after": 278,
                "instruction": "Turn left"
              },
              "weight": 31.2,
              "geometry": {
                "coordinates": [
                  [
                    -75.18235,
                    39.956955
                  ],
                  [
                    -75.182472,
                    39.95697
                  ],
                  [
                    -75.182587,
                    39.956982
                  ],
                  [
                    -75.182701,
                    39.95697
                  ],
                  [
                    -75.182755,
                    39.95694
                  ],
                  [
                    -75.182854,
                    39.95681
                  ]
                ],
                "type": "LineString"
              },
              "duration": 31.2,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.182854,
                    39.95681
                  ],
                  "geometry_index": 11,
                  "in": 1,
                  "bearings": [
                    13,
                    32,
                    189
                  ],
                  "duration": 4.5
                },
                {
                  "bearings": [
                    9,
                    173,
                    188
                  ],
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "location": [
                    -75.182907,
                    39.956551
                  ],
                  "geometry_index": 12,
                  "in": 0,
                  "out": 2
                },
                {
                  "bearings": [
                    8,
                    189
                  ],
                  "entry": [
                    false,
                    true
                  ],
                  "location": [
                    -75.182922,
                    39.956467
                  ],
                  "geometry_index": 13,
                  "in": 0,
                  "out": 1
                },
                {
                  "bearings": [
                    9,
                    189,
                    237
                  ],
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "location": [
                    -75.183014,
                    39.956043
                  ],
                  "geometry_index": 14,
                  "in": 0,
                  "out": 1
                },
                {
                  "bearings": [
                    9,
                    101,
                    190,
                    284
                  ],
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "location": [
                    -75.183044,
                    39.955894
                  ],
                  "geometry_index": 16,
                  "in": 0,
                  "out": 2
                },
                {
                  "entry": [
                    false,
                    true,
                    false
                  ],
                  "out": 1,
                  "location": [
                    -75.183113,
                    39.955582
                  ],
                  "geometry_index": 17,
                  "in": 0,
                  "bearings": [
                    10,
                    190,
                    344
                  ],
                  "duration": 0.5
                },
                {
                  "bearings": [
                    10,
                    159,
                    190
                  ],
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "location": [
                    -75.183197,
                    39.9552
                  ],
                  "geometry_index": 18,
                  "in": 0,
                  "out": 2
                },
                {
                  "bearings": [
                    10,
                    99,
                    188,
                    276
                  ],
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "location": [
                    -75.18325,
                    39.95496
                  ],
                  "geometry_index": 19,
                  "in": 0,
                  "out": 2
                }
              ],
              "name": "North 30th Street (PA 3 West)",
              "distance": 221,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.182854,
                  39.95681
                ],
                "bearing_before": 212,
                "modifier": "slight left",
                "bearing_after": 189,
                "instruction": "Make a slight left onto North 30th Street (PA 3 West)"
              },
              "ref": "PA 3 West",
              "weight": 46.564,
              "geometry": {
                "coordinates": [
                  [
                    -75.182854,
                    39.95681
                  ],
                  [
                    -75.182907,
                    39.956551
                  ],
                  [
                    -75.182922,
                    39.956467
                  ],
                  [
                    -75.183014,
                    39.956043
                  ],
                  [
                    -75.183029,
                    39.955971
                  ],
                  [
                    -75.183044,
                    39.955894
                  ],
                  [
                    -75.183113,
                    39.955582
                  ],
                  [
                    -75.183197,
                    39.9552
                  ],
                  [
                    -75.18325,
                    39.95496
                  ],
                  [
                    -75.183273,
                    39.954842
                  ]
                ],
                "type": "LineString"
              },
              "duration": 46.564,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "lanes": [
                    {
                      "indications": [
                        "left"
                      ],
                      "valid": false
                    },
                    {
                      "indications": [
                        "left"
                      ],
                      "valid": false
                    },
                    {
                      "indications": [
                        "straight",
                        "right"
                      ],
                      "valid": true
                    }
                  ],
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.183273,
                    39.954842
                  ],
                  "geometry_index": 20,
                  "in": 0,
                  "bearings": [
                    8,
                    100,
                    279
                  ],
                  "duration": 3
                },
                {
                  "bearings": [
                    99,
                    189,
                    276
                  ],
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "location": [
                    -75.183426,
                    39.954861
                  ],
                  "geometry_index": 21,
                  "in": 0,
                  "out": 2
                },
                {
                  "bearings": [
                    30,
                    96,
                    211,
                    282
                  ],
                  "entry": [
                    false,
                    false,
                    false,
                    true
                  ],
                  "location": [
                    -75.183472,
                    39.954865
                  ],
                  "geometry_index": 22,
                  "in": 1,
                  "out": 3
                },
                {
                  "bearings": [
                    102,
                    279
                  ],
                  "entry": [
                    false,
                    true
                  ],
                  "location": [
                    -75.18354,
                    39.954876
                  ],
                  "geometry_index": 23,
                  "in": 0,
                  "out": 1
                },
                {
                  "bearings": [
                    8,
                    99,
                    279
                  ],
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "location": [
                    -75.184875,
                    39.95504
                  ],
                  "geometry_index": 25,
                  "in": 1,
                  "out": 2
                },
                {
                  "bearings": [
                    99,
                    186,
                    280
                  ],
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "location": [
                    -75.185066,
                    39.955063
                  ],
                  "geometry_index": 26,
                  "in": 0,
                  "out": 2
                },
                {
                  "bearings": [
                    13,
                    100,
                    191,
                    278
                  ],
                  "entry": [
                    false,
                    false,
                    false,
                    true
                  ],
                  "location": [
                    -75.185211,
                    39.955082
                  ],
                  "geometry_index": 27,
                  "in": 1,
                  "out": 3
                },
                {
                  "bearings": [
                    98,
                    186,
                    281
                  ],
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "location": [
                    -75.185356,
                    39.955097
                  ],
                  "geometry_index": 28,
                  "in": 0,
                  "out": 2
                },
                {
                  "bearings": [
                    101,
                    168,
                    280,
                    349
                  ],
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "location": [
                    -75.185509,
                    39.95512
                  ],
                  "geometry_index": 29,
                  "in": 0,
                  "out": 2
                },
                {
                  "bearings": [
                    8,
                    100,
                    279
                  ],
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "location": [
                    -75.18573,
                    39.955151
                  ],
                  "geometry_index": 30,
                  "in": 1,
                  "out": 2
                },
                {
                  "bearings": [
                    8,
                    99,
                    278
                  ],
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "location": [
                    -75.186462,
                    39.955238
                  ],
                  "geometry_index": 31,
                  "in": 1,
                  "out": 2
                },
                {
                  "bearings": [
                    11,
                    98,
                    190,
                    282
                  ],
                  "entry": [
                    false,
                    false,
                    false,
                    true
                  ],
                  "location": [
                    -75.186996,
                    39.955299
                  ],
                  "geometry_index": 32,
                  "in": 1,
                  "out": 3
                },
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.187119,
                    39.955318
                  ],
                  "geometry_index": 33,
                  "in": 1,
                  "bearings": [
                    8,
                    102,
                    278
                  ],
                  "duration": 1.75
                },
                {
                  "bearings": [
                    8,
                    98,
                    186,
                    279
                  ],
                  "entry": [
                    false,
                    false,
                    false,
                    true
                  ],
                  "location": [
                    -75.187256,
                    39.955334
                  ],
                  "geometry_index": 34,
                  "in": 1,
                  "out": 3
                },
                {
                  "bearings": [
                    6,
                    98,
                    189,
                    279
                  ],
                  "entry": [
                    false,
                    false,
                    false,
                    true
                  ],
                  "location": [
                    -75.188171,
                    39.955441
                  ],
                  "geometry_index": 36,
                  "in": 1,
                  "out": 3
                },
                {
                  "bearings": [
                    8,
                    99,
                    278
                  ],
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "location": [
                    -75.188263,
                    39.955452
                  ],
                  "geometry_index": 37,
                  "in": 1,
                  "out": 2
                },
                {
                  "bearings": [
                    8,
                    98,
                    191,
                    279
                  ],
                  "entry": [
                    false,
                    false,
                    false,
                    true
                  ],
                  "location": [
                    -75.18837,
                    39.955463
                  ],
                  "geometry_index": 38,
                  "in": 1,
                  "out": 3
                },
                {
                  "bearings": [
                    99,
                    279
                  ],
                  "entry": [
                    false,
                    true
                  ],
                  "location": [
                    -75.18895,
                    39.955536
                  ],
                  "geometry_index": 39,
                  "in": 0,
                  "out": 1
                },
                {
                  "bearings": [
                    0,
                    99,
                    180,
                    279
                  ],
                  "entry": [
                    false,
                    false,
                    false,
                    true
                  ],
                  "location": [
                    -75.189369,
                    39.955589
                  ],
                  "geometry_index": 40,
                  "in": 1,
                  "out": 3
                }
              ],
              "name": "Market Street",
              "distance": 536,
              "maneuver": {
                "type": "end of road",
                "location": [
                  -75.183273,
                  39.954842
                ],
                "bearing_before": 188,
                "modifier": "right",
                "bearing_after": 279,
                "instruction": "Turn right onto Market Street"
              },
              "weight": 85.68,
              "geometry": {
                "coordinates": [
                  [
                    -75.183273,
                    39.954842
                  ],
                  [
                    -75.183426,
                    39.954861
                  ],
                  [
                    -75.183472,
                    39.954865
                  ],
                  [
                    -75.18354,
                    39.954876
                  ],
                  [
                    -75.18383,
                    39.95491
                  ],
                  [
                    -75.184875,
                    39.95504
                  ],
                  [
                    -75.185066,
                    39.955063
                  ],
                  [
                    -75.185211,
                    39.955082
                  ],
                  [
                    -75.185356,
                    39.955097
                  ],
                  [
                    -75.185509,
                    39.95512
                  ],
                  [
                    -75.18573,
                    39.955151
                  ],
                  [
                    -75.186462,
                    39.955238
                  ],
                  [
                    -75.186996,
                    39.955299
                  ],
                  [
                    -75.187119,
                    39.955318
                  ],
                  [
                    -75.187256,
                    39.955334
                  ],
                  [
                    -75.187439,
                    39.955357
                  ],
                  [
                    -75.188171,
                    39.955441
                  ],
                  [
                    -75.188263,
                    39.955452
                  ],
                  [
                    -75.18837,
                    39.955463
                  ],
                  [
                    -75.18895,
                    39.955536
                  ],
                  [
                    -75.189369,
                    39.955589
                  ],
                  [
                    -75.189491,
                    39.955605
                  ]
                ],
                "type": "LineString"
              },
              "duration": 85.68,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 0,
                  "location": [
                    -75.189491,
                    39.955605
                  ],
                  "geometry_index": 41,
                  "in": 1,
                  "bearings": [
                    8,
                    99,
                    186,
                    276
                  ],
                  "duration": 3
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.189468,
                    39.955727
                  ],
                  "geometry_index": 42,
                  "in": 2,
                  "bearings": [
                    9,
                    99,
                    188,
                    282
                  ],
                  "duration": 2
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.189323,
                    39.956409
                  ],
                  "geometry_index": 44,
                  "in": 2,
                  "bearings": [
                    8,
                    125,
                    189,
                    306
                  ],
                  "duration": 2
                }
              ],
              "name": "North 33rd Street",
              "distance": 104.308,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.189491,
                  39.955605
                ],
                "bearing_before": 279,
                "modifier": "right",
                "bearing_after": 8,
                "instruction": "Turn right onto North 33rd Street"
              },
              "weight": 23.326,
              "geometry": {
                "coordinates": [
                  [
                    -75.189491,
                    39.955605
                  ],
                  [
                    -75.189468,
                    39.955727
                  ],
                  [
                    -75.189445,
                    39.955856
                  ],
                  [
                    -75.189323,
                    39.956409
                  ],
                  [
                    -75.189301,
                    39.956528
                  ]
                ],
                "type": "LineString"
              },
              "duration": 23.326,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "bearings": [
                    188
                  ],
                  "location": [
                    -75.189301,
                    39.956528
                  ],
                  "entry": [
                    true
                  ],
                  "geometry_index": 45,
                  "in": 0
                }
              ],
              "name": "North 33rd Street",
              "distance": 0,
              "maneuver": {
                "type": "arrive",
                "location": [
                  -75.189301,
                  39.956528
                ],
                "bearing_before": 8,
                "modifier": "left",
                "bearing_after": 0,
                "instruction": "You have arrived at your 1st destination, on the left"
              },
              "weight": 0,
              "geometry": {
                "coordinates": [
                  [
                    -75.189301,
                    39.956528
                  ],
                  [
                    -75.189301,
                    39.956528
                  ]
                ],
                "type": "LineString"
              },
              "duration": 0,
              "mode": "driving",
              "driving_side": "right"
            }
          ],
          "distance": 1034.973,
          "duration": 236.322,
          "weight": 236.322
        },
        {
          "summary": "Arch Street, North 34th Street",
          "steps": [
            {
              "intersections": [
                {
                  "bearings": [
                    9
                  ],
                  "location": [
                    -75.189301,
                    39.956528
                  ],
                  "entry": [
                    true
                  ],
                  "geometry_index": 0,
                  "out": 0
                },
                {
                  "entry": [
                    true,
                    true,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.189224,
                    39.956898
                  ],
                  "geometry_index": 1,
                  "in": 2,
                  "bearings": [
                    14,
                    97,
                    189
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 0,
                  "location": [
                    -75.189209,
                    39.956944
                  ],
                  "geometry_index": 2,
                  "in": 1,
                  "bearings": [
                    10,
                    194,
                    296
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.189079,
                    39.957531
                  ],
                  "geometry_index": 3,
                  "in": 2,
                  "bearings": [
                    9,
                    101,
                    190,
                    276
                  ],
                  "duration": 6.2
                }
              ],
              "name": "North 33rd Street",
              "distance": 120.692,
              "maneuver": {
                "bearing_after": 9,
                "type": "depart",
                "bearing_before": 0,
                "location": [
                  -75.189301,
                  39.956528
                ],
                "instruction": "Head north on North 33rd Street"
              },
              "weight": 28.883,
              "geometry": {
                "coordinates": [
                  [
                    -75.189301,
                    39.956528
                  ],
                  [
                    -75.189224,
                    39.956898
                  ],
                  [
                    -75.189209,
                    39.956944
                  ],
                  [
                    -75.189079,
                    39.957531
                  ],
                  [
                    -75.189064,
                    39.957603
                  ]
                ],
                "type": "LineString"
              },
              "duration": 28.883,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.189064,
                    39.957603
                  ],
                  "geometry_index": 4,
                  "in": 1,
                  "bearings": [
                    101,
                    189,
                    278,
                    358
                  ],
                  "duration": 23.25
                },
                {
                  "entry": [
                    false,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.189171,
                    39.957615
                  ],
                  "geometry_index": 5,
                  "in": 1,
                  "bearings": [
                    3,
                    98,
                    184,
                    279
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.190956,
                    39.957832
                  ],
                  "geometry_index": 6,
                  "in": 1,
                  "bearings": [
                    11,
                    99,
                    189,
                    280
                  ],
                  "duration": 18.6
                }
              ],
              "name": "Arch Street",
              "distance": 170,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.189064,
                  39.957603
                ],
                "bearing_before": 9,
                "modifier": "left",
                "bearing_after": 278,
                "instruction": "Turn left onto Arch Street"
              },
              "weight": 77.49,
              "geometry": {
                "coordinates": [
                  [
                    -75.189064,
                    39.957603
                  ],
                  [
                    -75.189171,
                    39.957615
                  ],
                  [
                    -75.190956,
                    39.957832
                  ],
                  [
                    -75.19104,
                    39.957844
                  ]
                ],
                "type": "LineString"
              },
              "duration": 77.49,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.19104,
                    39.957844
                  ],
                  "geometry_index": 7,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    188
                  ],
                  "duration": 46.5
                },
                {
                  "entry": [
                    false,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.191055,
                    39.957756
                  ],
                  "geometry_index": 8,
                  "in": 0,
                  "bearings": [
                    8,
                    190
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.191132,
                    39.957432
                  ],
                  "geometry_index": 9,
                  "in": 0,
                  "bearings": [
                    10,
                    99,
                    187,
                    277
                  ],
                  "duration": 2
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.191139,
                    39.957382
                  ],
                  "geometry_index": 10,
                  "in": 0,
                  "bearings": [
                    7,
                    100,
                    191
                  ],
                  "duration": 1.55
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.19117,
                    39.957264
                  ],
                  "geometry_index": 11,
                  "in": 0,
                  "bearings": [
                    11,
                    189,
                    306
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    false,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.191246,
                    39.956894
                  ],
                  "geometry_index": 12,
                  "in": 0,
                  "bearings": [
                    9,
                    97,
                    190
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.191315,
                    39.9566
                  ],
                  "geometry_index": 13,
                  "in": 0,
                  "bearings": [
                    10,
                    186,
                    279
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.191322,
                    39.956547
                  ],
                  "geometry_index": 14,
                  "in": 0,
                  "bearings": [
                    6,
                    94,
                    190,
                    282
                  ],
                  "duration": 6.2
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.191338,
                    39.956482
                  ],
                  "geometry_index": 15,
                  "in": 0,
                  "bearings": [
                    10,
                    103,
                    188
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    false,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.191368,
                    39.956314
                  ],
                  "geometry_index": 16,
                  "in": 0,
                  "bearings": [
                    8,
                    189
                  ],
                  "duration": 1.55
                },
                {
                  "entry": [
                    false,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.191399,
                    39.956173
                  ],
                  "geometry_index": 17,
                  "in": 0,
                  "bearings": [
                    9,
                    103,
                    188
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.191437,
                    39.955971
                  ],
                  "geometry_index": 18,
                  "in": 0,
                  "bearings": [
                    8,
                    101,
                    191,
                    282
                  ],
                  "duration": 6.2
                },
                {
                  "entry": [
                    false,
                    true,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.191467,
                    39.955845
                  ],
                  "geometry_index": 19,
                  "in": 0,
                  "bearings": [
                    11,
                    100,
                    186,
                    279
                  ],
                  "duration": 24.8
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.191483,
                    39.955742
                  ],
                  "geometry_index": 21,
                  "in": 0,
                  "bearings": [
                    6,
                    101,
                    189,
                    277
                  ],
                  "duration": 2
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.191566,
                    39.955353
                  ],
                  "geometry_index": 22,
                  "in": 0,
                  "bearings": [
                    9,
                    190,
                    282
                  ],
                  "duration": 1.55
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.191597,
                    39.955219
                  ],
                  "geometry_index": 23,
                  "in": 0,
                  "bearings": [
                    10,
                    187,
                    279
                  ],
                  "duration": 1.55
                },
                {
                  "entry": [
                    false,
                    true,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.19162,
                    39.955082
                  ],
                  "geometry_index": 24,
                  "in": 0,
                  "bearings": [
                    7,
                    101,
                    190,
                    277
                  ],
                  "duration": 2
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.191765,
                    39.954422
                  ],
                  "geometry_index": 25,
                  "in": 0,
                  "bearings": [
                    10,
                    101,
                    192,
                    279
                  ],
                  "duration": 6.2
                },
                {
                  "entry": [
                    false,
                    true,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.191788,
                    39.954338
                  ],
                  "geometry_index": 26,
                  "in": 0,
                  "bearings": [
                    12,
                    100,
                    189,
                    280
                  ],
                  "duration": 28
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.191803,
                    39.954262
                  ],
                  "geometry_index": 27,
                  "in": 0,
                  "bearings": [
                    9,
                    100,
                    190,
                    277
                  ],
                  "duration": 2
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.191956,
                    39.953575
                  ],
                  "geometry_index": 28,
                  "in": 0,
                  "bearings": [
                    10,
                    189,
                    282
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.192017,
                    39.95327
                  ],
                  "geometry_index": 29,
                  "in": 0,
                  "bearings": [
                    9,
                    187,
                    284
                  ],
                  "duration": 1.75
                },
                {
                  "entry": [
                    false,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.192024,
                    39.953224
                  ],
                  "geometry_index": 30,
                  "in": 0,
                  "bearings": [
                    7,
                    99,
                    189
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.192085,
                    39.952915
                  ],
                  "geometry_index": 31,
                  "in": 0,
                  "bearings": [
                    9,
                    99,
                    187,
                    279
                  ],
                  "duration": 7
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.192101,
                    39.952816
                  ],
                  "geometry_index": 32,
                  "in": 0,
                  "bearings": [
                    7,
                    101,
                    188,
                    279
                  ],
                  "duration": 8
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.192116,
                    39.952732
                  ],
                  "geometry_index": 33,
                  "in": 0,
                  "bearings": [
                    8,
                    99,
                    189,
                    277
                  ],
                  "duration": 2
                },
                {
                  "entry": [
                    false,
                    true,
                    false
                  ],
                  "out": 1,
                  "location": [
                    -75.192184,
                    39.952404
                  ],
                  "geometry_index": 34,
                  "in": 0,
                  "bearings": [
                    9,
                    188,
                    279
                  ],
                  "duration": 0.5
                },
                {
                  "entry": [
                    false,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.1922,
                    39.952316
                  ],
                  "geometry_index": 35,
                  "in": 0,
                  "bearings": [
                    8,
                    99,
                    189
                  ],
                  "duration": 0.5
                }
              ],
              "name": "North 34th Street",
              "distance": 649.776,
              "maneuver": {
                "type": "end of road",
                "location": [
                  -75.19104,
                  39.957844
                ],
                "bearing_before": 280,
                "modifier": "left",
                "bearing_after": 188,
                "instruction": "Turn left onto North 34th Street"
              },
              "weight": 269.903,
              "geometry": {
                "coordinates": [
                  [
                    -75.19104,
                    39.957844
                  ],
                  [
                    -75.191055,
                    39.957756
                  ],
                  [
                    -75.191132,
                    39.957432
                  ],
                  [
                    -75.191139,
                    39.957382
                  ],
                  [
                    -75.19117,
                    39.957264
                  ],
                  [
                    -75.191246,
                    39.956894
                  ],
                  [
                    -75.191315,
                    39.9566
                  ],
                  [
                    -75.191322,
                    39.956547
                  ],
                  [
                    -75.191338,
                    39.956482
                  ],
                  [
                    -75.191368,
                    39.956314
                  ],
                  [
                    -75.191399,
                    39.956173
                  ],
                  [
                    -75.191437,
                    39.955971
                  ],
                  [
                    -75.191467,
                    39.955845
                  ],
                  [
                    -75.191475,
                    39.95578
                  ],
                  [
                    -75.191483,
                    39.955742
                  ],
                  [
                    -75.191566,
                    39.955353
                  ],
                  [
                    -75.191597,
                    39.955219
                  ],
                  [
                    -75.19162,
                    39.955082
                  ],
                  [
                    -75.191765,
                    39.954422
                  ],
                  [
                    -75.191788,
                    39.954338
                  ],
                  [
                    -75.191803,
                    39.954262
                  ],
                  [
                    -75.191956,
                    39.953575
                  ],
                  [
                    -75.192017,
                    39.95327
                  ],
                  [
                    -75.192024,
                    39.953224
                  ],
                  [
                    -75.192085,
                    39.952915
                  ],
                  [
                    -75.192101,
                    39.952816
                  ],
                  [
                    -75.192116,
                    39.952732
                  ],
                  [
                    -75.192184,
                    39.952404
                  ],
                  [
                    -75.1922,
                    39.952316
                  ],
                  [
                    -75.192245,
                    39.952087
                  ]
                ],
                "type": "LineString"
              },
              "duration": 269.903,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "bearings": [
                    9
                  ],
                  "location": [
                    -75.192245,
                    39.952087
                  ],
                  "entry": [
                    true
                  ],
                  "geometry_index": 36,
                  "in": 0
                }
              ],
              "name": "North 34th Street",
              "distance": 0,
              "maneuver": {
                "type": "arrive",
                "location": [
                  -75.192245,
                  39.952087
                ],
                "bearing_before": 189,
                "modifier": "right",
                "bearing_after": 0,
                "instruction": "You have arrived at your destination, on the right"
              },
              "weight": 0,
              "geometry": {
                "coordinates": [
                  [
                    -75.192245,
                    39.952087
                  ],
                  [
                    -75.192245,
                    39.952087
                  ]
                ],
                "type": "LineString"
              },
              "duration": 0,
              "mode": "driving",
              "driving_side": "right"
            }
          ],
          "distance": 940.469,
          "duration": 376.276,
          "weight": 376.276
        }
      ],
      "geometry": {
        "coordinates": [
          [
            -75.182579,
            39.955879
          ],
          [
            -75.18235,
            39.956955
          ],
          [
            -75.182701,
            39.95697
          ],
          [
            -75.182854,
            39.95681
          ],
          [
            -75.183273,
            39.954842
          ],
          [
            -75.189491,
            39.955605
          ],
          [
            -75.189301,
            39.956528
          ],
          [
            -75.189064,
            39.957603
          ],
          [
            -75.19104,
            39.957844
          ],
          [
            -75.192245,
            39.952087
          ]
        ],
        "type": "LineString"
      },
      "distance": 1975.441,
      "duration": 612.598,
      "weight": 612.598
    }
  ],
  "waypoints": [
    {
      "distance": 50.275,
      "name": "",
      "location": [
        -75.182579,
        39.955879
      ]
    },
    {
      "distance": 52.059,
      "name": "North 33rd Street",
      "location": [
        -75.189301,
        39.956528
      ]
    },
    {
      "distance": 82.374,
      "name": "South 34th Street",
      "location": [
        -75.192245,
        39.952087
      ]
    }
  ],
  "code": "Ok",
  "uuid": "M61Q_BRLYCNdxp-ppkWNdD1eNRbedBAYVHKzsYeBPcAUdAyS89nEhQ=="
}
