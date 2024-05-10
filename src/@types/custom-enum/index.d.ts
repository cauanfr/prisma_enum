export namespace $CustomEnum {
  export const TripStatusUpdate: {
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED'
  };

  export type TripStatusUpdate = (typeof TripStatusUpdate)[keyof typeof TripStatusUpdate]
}

export type TripStatusUpdate = $CustomEnum.TripStatusUpdate

export const TripStatusUpdate: typeof $CustomEnum.TripStatusUpdate