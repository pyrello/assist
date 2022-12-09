<template>
    <div>
        <header>
            <h1>Upload</h1>
        </header>
        <form>
            <div class="form-group">
                <label class="control-label">Select a file to upload</label>
                <input class="form-control" type="file" name="source_file" id="source_file" @change.prevent="processFileImport">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            handleUpload(e) {
                let fd = new FormData
                fd.append('source_file', e.target.files[0])
                console.log('fd', fd)
                return this.$http.post('reporting/profiles/upload', fd)
            },
            createImport(path) {
                return this.$http.post('reporting/profiles/import', { path })
            },
            processFileImport(e) {
                // Send the file data
                // Receive the file record back (Promise)
                this.handleUpload(e)
                    .then(response => {
                        console.log("Response - before creating import", response)
//                            this.source.file_id = response.data.id
                        // Send the source data
                        // Receive the source record back (Promise)
                        return this.createImport(response.body)
                    })
                    .then(response => {
                        console.log("Response", response)
                        // Re-direct to the source page
                        // this.$router.go('/imports/'+response.data.id)
                    })
                    .catch(error => {
                        console.log("Error", error)
                    })
            },
        }
    }
</script>