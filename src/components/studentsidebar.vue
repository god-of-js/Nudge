<template>
  <div>
    <v-navigation-drawer color="white" app clipped>
      <v-list>
        <v-tabs vertical color="#3b28c7">
            <v-tab to="/dashboard">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-home-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

            </v-tab>
            <v-tab to="/profile">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
                
            </v-tab>
            <v-tab to="/attendance">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-note-text-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Attendance</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
                
            </v-tab>
            <v-tab to="/notes">
                
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-notebook-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
            </v-tab>
            <v-tab to="/call">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone-outgoing-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Teacher Call</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
                
            </v-tab>
            <v-tab>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-alarm-multiple</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Reminders</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
                
            </v-tab>
            <v-tab to="/assignments">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-note-plus-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Assignments</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

            </v-tab>
            <v-tab to="/assignments">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-timetable</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Time table</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

            </v-tab>
            <v-tab to="/set-schedule">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-alarm-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Schedule</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

            </v-tab>
        </v-tabs>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>