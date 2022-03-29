<template>
  <v-card>
    <v-card-title style="margin-bottom: 20px;">
      Commit Details
    </v-card-title>
    <v-card-text>
      <v-text-field v-model="name" outlined disabled label="Name"></v-text-field>
      <v-text-field v-model="email" outlined disabled label="Email"></v-text-field>
      <v-text-field v-model="message" outlined disabled label="Message"></v-text-field>
      <v-text-field v-model="date" outlined disabled label="Date"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn style="margin-bottom: 20px;" tile @click.stop="$emit('close')">back</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'CommitDetails',
    props: ['data'],
    data() {
        return {
            name: this.data.name,
            email: this.data.email,
            message: this.data.message,
            date: new Date(this.data.date).toDateString()
        }
    },
}
</script>
