<template>
    <v-container>
        <v-row class="d-flex align-center">
            <v-col class="d-flex justify-center align-center">
                <v-card max-width="400">
                    <v-card-title>Commits</v-card-title>
                    <v-card-text>
                        <div v-for="commit in commits" v-bind:key="commit.id">
                            <div @click="open(commit)">
                                <a>{{commit.sha}}</a> 
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dialogShown" max-width="800">
            <commit-details :data=detailsData @close="close()"  />
        </v-dialog>
    </v-container>
</template>

<script>
import Service from '../services/index.js'
import CommitDetails from '../components/CommitDetails.vue'

export default {
    name: 'MainCommitView',
    components: { CommitDetails },
    data() {
        return {
            dialogShown: false,
            commit: null,
            commits: [],
            detailsData: null,
        }
    },
    async mounted() {
        let numberOfCommits = 10;
        this.transformData(numberOfCommits);
    },
    methods: {
        open(commit) {
            this.detailsData = commit;
            this.dialogShown = true;
        },
        close() {
            this.dialogShown = false;
        },
        async transformData(numberOfCommits) {
            let data = await this.getData(numberOfCommits);
            for(let d of data) {
                let temp = {
                    "sha": d.sha,
                    "name": d.commit.author.name,
                    "email": d.commit.author.email,
                    "message": d.commit.message,
                    "date": d.commit.author.date,
                }
                this.commits.push(temp)
            }
        },
        async getData(numberOfCommits) {
           let resp = await Service.getGlobal(numberOfCommits);
           return resp; 
        }

    },
}
</script>