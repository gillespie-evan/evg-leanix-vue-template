<script>

export default{
    name: 'Query',
    data(){
        return{
            
        }
    }
}

</script>

<!-- 
{
  allFactSheets(factSheetType: Application) {
    edges {
      node {
        ... on Application {
          id
          displayName
          relApplicationToITComponent {
            edges {
              node {
                id
                costTotalAnnual
              }
            }
          }
        }
      }
    }
  }
}
-->