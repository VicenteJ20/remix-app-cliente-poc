import { gql } from '@apollo/client'

const SPOTS_QUERY = gql`
  query ParkingSpot {
    spots {
      sensorId,
      sensorStatus,
      sensorLocation,
      sensorType
    }
  }
`

const SPOTS_QUERY_POCA_INFO = gql`
  query ParkingSpot {
    spots {
      sensorId,
      sensorLocation
    }
  }
`

const SPOT_MUTATION_ADD = gql`
  mutation CreateSpot($sensorId: String!, $sensorType: String!, $sensorStatus: Boolean!, $sensorLocation: String!) {
    createSpot(
      sensorId: $sensorId,
      sensorType: $sensorType,
      sensorStatus: $sensorStatus,
      sensorLocation: $sensorLocation
    ) {
      spot {
        sensorId,
        sensorType
      }
    }
  }
`

export { SPOTS_QUERY, SPOT_MUTATION_ADD }