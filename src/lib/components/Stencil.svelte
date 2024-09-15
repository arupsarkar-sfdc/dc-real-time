<script>
    export let text
    export let helpText
    export let image
    export let id
    export let style
</script>

<div id={id}>
<img class="stencil " src={image} alt={helpText} style={style}/>
<!-- <div class="slds-text-heading_large slds-align_absolute-center">{text}</div> -->
</div>

<style>
    .stencil {
        background-color: #D3DCE7;
        color: #5876A3;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        text-transform: uppercase;
    }

</style>