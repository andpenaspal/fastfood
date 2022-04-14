interface nameable {
  name: string;
}

class MapTransformer {
  public static transformObjectArrayToIdMap<T extends nameable & object>(items: T[]) {
    const map = new Map<string, T>();
    items.forEach((item) => map.set(item.name, item));
    return map;
  }
}

export default MapTransformer;
