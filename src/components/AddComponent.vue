<template>
    <div class="container-fluid">
        <div class='col-sm-12'>
            <form action="#" class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pIdentifier">Part identifier:</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" id="pIdentifier" placeholder="Enter part identifier" name="pIdentifier">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pType">Part type:</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" id="pType" placeholder="Enter part type" name="pType">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-4">
                        <button type="submit" class="btn btn-default">Submit</button>
                        <button type="reset" class="btn btn-default">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>