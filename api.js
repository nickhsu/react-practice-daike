const Api = {
    "endpoint": "wss://example.com/chat",	// websocket endpoint
    "self": {	// api caller profile
        "id": "6VZPqBdk",
        "name": "Vladimir",
        "role": "agent",
        "avatar": "image_url"	// replace this url with some local resource plz.
    },
    "team": {	// team details
        "id": "3mlXq7",	// team id
        "name": "Daike",
        "members": [	// team members
            {
                "id": "6VZPqBdk",
                "name": "我",
                "role": "agent",
                "avatar": "image_url"
            },
            {
                "id": "holeTeam",
                "name": "整個團隊",
                "role": "psudo",
                "avatar": "image_url"
            },
            {
                "id": "RKazMjgB",	// member id
                "name": "Vladimir",	// member name
                "role": "agent",
                "avatar": "image_url"
            },
            {
                "id": "UYD1pbMp",
                "name": "李四",
                "role": "agent",
                "avatar": "image_url"
            },
            {
                "id": "jgBizL9",
                "name": "YamamotoKanae",
                "role": "agent",
                "avatar": "image_url"
            },
            {
                "id": "6pSQAJ5FCo",
                "name": "Gdańsk",
                "role": "agent",
                "avatar": "image_url"
            },
            {
                "id": "t4D4gjT",
                "name": "赵六",
                "role": "agent",
                "avatar": "image_url"
            }
        ],
        "apps": [	// apps belongs to caller's team
            {
                "id": "DOodmgNL",	// app id
                "name": "Medium",
                "icon": "https://lh3.googleusercontent.com/nrOM9iR_aY7_I8OOEYs40ekSquXo1dmfMAXCouSV71172uaqpSBYAQ-GGAMSIV4j9LU=w300-rw"	// app icon
            },
            {
                "id": "Dt4D4gjToR",
                "name": "Call of Duty",
                "icon": "https://lh3.googleusercontent.com/h6Nw5LBeWI-_rZNB2-Pxq6_7_0tn9A5dnqpET0TjiUBUiextptfGSsKDLftxBcpekDE=w300-rw"
            }
        ]
    }
};

export default Api