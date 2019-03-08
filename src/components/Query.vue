<script>
export default {
  name: "Query",
  data() {
    return {
      queryData: {
        data: [],
        columns: [
          { data: "applicationName", type: "text", editor: false },
          { data: "applicationID", type: "text", editor: false },
          { data: "ITCRelationID", type: "text", editor: false },
          { data: "costTotalAnnual", type: "text", editor: false }
        ],
        colHeaders: [
          "applicationName",
          "applicationID",
          "ITCRelationID",
          "costTotalAnnual"
        ],
        colWidths: [300, 300, 300, 120],
        rowHeaders: false,
        strechH: "all",
        disableVisualSelection: true,
        columnSorting: true
      }
    };
  },
  methods: {
    fetchApplicationData() {
      const query = `{
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
}`;
      this.$lx.showSpinner();
      this.$lx
        .executeGraphQL(query)
        .then(res => {
          this.$lx.hideSpinner();
          let factSheets = res.allFactSheets.edges
            .map(edge => edge.node)
            .map(obj => {
              let temp = {
                applicationName: obj.name,
                applicationID: null,
                ITCRelationID: null,
                costTotalAnnual: null
              };
              if (obj.applicationID != null) {
                temp.applicationID = obj.id;
              }
              if (obj.relApplicationToITComponent.edges[0] != null) {
                temp.ITCRelationID =
                  obj.relApplicationToITComponent.edges[0].node.id;
              }
              if (obj.relApplicationToITComponent.edges[0] != null) {
                temp.costTotalAnnual =
                  obj.relApplicationToITComponent.edges[0].node.costTotalAnnual;
              }
              return temp;
            });
          resolve(factSheets);
        }, {})
        .catch(err => {
          this.$lx.hideSpinner();
          reject(err);
        });
    }
  },
  computed: {
    recipients() {
      return this.application && Array.isArray(this.application.recipients)
        ? this.application.recipients
        : [];
    }
  },
  created() {
    this.fetchApplicationData().then(factSheets => {
      this.queryData.data = factSheets;
    });
    // eslint-disable-next-line
    //	.catch(err => { console.error(err) })
  }
};
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