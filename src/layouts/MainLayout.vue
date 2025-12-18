<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>My Music World</q-toolbar-title>
        <q-btn flat label="Home" to="/" />
        <q-btn flat label="About" to="/about" />
        <q-btn flat label="Playlist" to="/playlist" />
        <q-btn flat label="Gallery" to="/gallery" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
