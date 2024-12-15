import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/Zoomland.glb')
  const instances = useMemo(
    () => ({
      Tree: nodes.tree,
      Tree1: nodes.tree_1,
      Tree2: nodes.tree_2,
      Arch: nodes.Arch,
      BigStone: nodes.BigStone,
      BigStone1: nodes.BigStone001,
      CloudBig: nodes.CloudBig,
      CloudBig1: nodes.CloudBig001,
      CloudBig2: nodes.CloudBig002,
      CloudBig3: nodes.CloudBig003,
      CloudSmall: nodes.CloudSmall,
      CloudSmall1: nodes.CloudSmall001,
      Harbor: nodes.Harbor,
      Flag: nodes.Flag_1,
      Flag1: nodes.Flag_2,
      Flag2: nodes.Flag001_1,
      Flag3: nodes.Flag001_2,
      Flag4: nodes.Flag002_1,
      Flag5: nodes.Flag002_2,
      SmallStone: nodes.SmallStone,
      SmallStone1: nodes.SmallStone001,
      SmallStone2: nodes.SmallStone002,
      Fence: nodes.Fence007,
      Fence1: nodes.Fence008,
      Fence2: nodes.Fence009,
      Fence3: nodes.Fence010,
      Fence4: nodes.Fence011,
      Fence5: nodes.Fence012,
      Fence6: nodes.Fence013,
      Fence7: nodes.Fence014,
      Fence8: nodes.Fence,
      Fence9: nodes.Fence001,
      Fence10: nodes.Fence002,
      Fence11: nodes.Fence003,
      Fence12: nodes.Fence004,
      Fence13: nodes.Fence005,
      Fence14: nodes.Fence006,
      House: nodes.House_1,
      House1: nodes.House_2,
      House2: nodes.House_3,
      House3: nodes.House_4,
      House4: nodes.House_5,
      House5: nodes.House001_1,
      House6: nodes.House001_2,
      House7: nodes.House001_3,
      House8: nodes.House001_4,
      House9: nodes.House001_5,
      House10: nodes.House002_1,
      House11: nodes.House002_2,
      House12: nodes.House002_3,
      House13: nodes.House002_4,
      House14: nodes.House002_5,
      Umbtrella: nodes.Umbtrella_1,
      Umbtrella1: nodes.Umbtrella_2,
      Umbtrella2: nodes.Umbtrella001_1,
      Umbtrella3: nodes.Umbtrella001_2,
      Umbtrella4: nodes.Umbtrella002_1,
      Umbtrella5: nodes.Umbtrella002_2,
      ElectricTurbine: nodes.ElectricTurbine,
      Efan: nodes.Efan002,
      ElectricTurbine1: nodes.ElectricTurbine001,
      Efan1: nodes.Efan001,
      ElectricTurbine2: nodes.ElectricTurbine002,
      Efan2: nodes.Efan,
      Bridge: nodes.Bridge,
      Ocean: nodes.Ocean,
      Zoomland: nodes.Zoomland,
      Land: nodes.Land,
      House15: nodes.House003_1,
      House16: nodes.House003_2,
      House17: nodes.House003_3,
      House18: nodes.House003_4,
      House19: nodes.House003_5,
      Balloon: nodes.Balloon_1,
      Balloon1: nodes.Balloon_2,
      Balloon2: nodes.Balloon_3,
      LifeguardTower: nodes.LifeguardTower_1,
      LifeguardTower1: nodes.LifeguardTower_2,
      LightTower: nodes.LightTower_1,
      LightTower1: nodes.LightTower_2,
      LightTower2: nodes.LightTower_3,
      LightTower3: nodes.LightTower_4,
      Radar: nodes.Radar_1,
      Radar1: nodes.Radar_2,
      WindCatcher: nodes.WindCatcher_1,
      WindCatcher1: nodes.WindCatcher_2,
      WindCatcher2: nodes.WindCatcher_3,
      Stick: nodes.Stick,
      Airship: nodes.Airship_1,
      Airship1: nodes.Airship_2,
      Airship2: nodes.Airship_3,
      Airship3: nodes.Airship_4,
      Airship4: nodes.Airship_5,
      Airship5: nodes.Airship_6,
      Fan: nodes.Fan,
      Antenna: nodes.Antenna,
      Ufo: nodes.Ufo_1,
      Ufo1: nodes.Ufo_2,
      Windmill: nodes.Windmill_1,
      Windmill1: nodes.Windmill_2,
      Windmill2: nodes.Windmill_3,
      Windmill3: nodes.Windmill_4,
      SpinPart: nodes.SpinPart_1,
      SpinPart1: nodes.SpinPart_2,
      SpinPart2: nodes.SpinPart_3,
      WindmillProtal: nodes.WindmillProtal_1,
      WindmillProtal1: nodes.WindmillProtal_2,
      WindmillProtal2: nodes.WindmillProtal_3,
      WindmillProtal3: nodes.WindmillProtal_4,
      WindmillProtal4: nodes.WindmillProtal_5,
      Banjo: nodes.Banjo_1,
      Banjo1: nodes.Banjo_2,
      Banjo2: nodes.Banjo_3,
      Banjo3: nodes.Banjo_4,
      Banjo4: nodes.Banjo_5,
      Cinema: nodes.Cinema_1,
      Cinema1: nodes.Cinema_2,
      Cinema2: nodes.Cinema_3,
      Cinema3: nodes.Cinema_4,
      Cinema4: nodes.Cinema_5,
      Megaphone: nodes.Megaphone_1,
      Megaphone1: nodes.Megaphone_2,
      Megaphone2: nodes.Megaphone_3,
      Horse: nodes.Horse,
      Kite: nodes.Kite_1,
      Kite1: nodes.Kite_2,
      Kite2: nodes.Kite_3,
      Kite3: nodes.Kite_4,
      Kite4: nodes.Kite_5,
      Kite5: nodes.Kite_6,
      BigTree: nodes.BigTree_1,
      BigTree1: nodes.BigTree_2,
      Boat: nodes.Boat_1,
      Boat1: nodes.Boat_2,
      Boat2: nodes.Boat_3,
      Sphere: nodes.Sphere001,
      Sphere1: nodes.Sphere001_1,
      Sphere2: nodes.Sphere001_2
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {instances => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Model(props) {
  const instances = useContext(context)
  return (
    <group {...props} dispose={null}>
      <group position={[-8.734, 1.201, 6.432]} rotation={[-1.809, 1.365, 1.81]} scale={0.201}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-8.007, 1.153, 2.604]} rotation={[-1.524, 1.45, 1.562]} scale={0.129}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-7.677, 1.311, -0.442]} rotation={[1.049, 1.557, -1.094]} scale={0.166}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-7.405, 1.113, 7.847]} rotation={[-1.447, 1.489, 1.44]} scale={0.098}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-7.3, 1.149, 7.418]} rotation={[1.161, 1.5, -1.121]} scale={0.14}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-6.989, 1.148, 2.938]} rotation={[2.884, 1.514, -2.864]} scale={0.122}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-6.878, 1.151, 1.856]} rotation={[1.497, 1.438, -1.528]} scale={0.158}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-6.593, 1.14, 7.24]} rotation={[-1.883, 1.48, 1.899]} scale={0.169}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-6.108, 2.888, -4.373]} rotation={[0.767, 1.512, -0.792]} scale={0.125}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-5.716, 0.356, -1.243]} rotation={[1.627, 1.514, -1.574]} scale={0.121}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-5.406, 1.149, 6.174]} rotation={[-1.526, 1.4, 1.505]} scale={0.166}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-4.855, 0.242, 3.997]} rotation={[1.722, 1.496, -1.714]} scale={0.102}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-4.665, 0.202, -2.127]} rotation={[-2.323, 1.545, 2.358]} scale={0.135}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-4.115, 0.142, 0.464]} rotation={[1.393, 1.494, -1.445]} scale={0.084}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-3.628, 0.197, -3.122]} rotation={[2.134, 1.468, -2.108]} scale={0.141}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-3.249, 0.343, -5.157]} rotation={[-1.197, 1.546, 1.183]} scale={0.311}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-1.223, 1.864, -7.467]} rotation={[1.433, 1.498, -1.426]} scale={0.109}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-0.788, 0.122, -2.057]} rotation={[-1.358, 1.5, 1.378]} scale={0.142}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-0.607, 1.755, -6.909]} rotation={[1.083, 1.463, -1.102]} scale={0.104}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-0.34, 1.693, -6.933]} rotation={[-1.715, 1.383, 1.744]} scale={0.115}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[0.099, 1.601, -5.847]} rotation={[-1.855, 1.43, 1.895]} scale={0.081}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[0.598, 0.21, 4.382]} rotation={[-2.202, 1.561, 2.146]} scale={0.126}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[0.842, 0.228, 4.505]} rotation={[-1.389, 1.486, 1.374]} scale={0.175}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[1.178, 0.233, -1.525]} rotation={[-0.992, 1.502, 1.017]} scale={0.117}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[1.29, 0.229, -1.717]} rotation={[-1.471, 1.356, 1.452]} scale={0.126}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[1.385, 0.172, -2.27]} rotation={[2.05, 1.463, -2.058]} scale={0.089}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[1.9, 0.238, 3.288]} rotation={[-1.664, 1.34, 1.691]} scale={0.156}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.018, 1.256, 7.977]} rotation={[-1.742, 1.467, 1.789]} scale={0.12}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.122, 1.245, 7.784]} rotation={[1.319, 1.503, -1.365]} scale={0.119}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.256, 1.233, -5.805]} rotation={[-1.435, 1.541, 1.42]} scale={0.199}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.522, 1.191, 3.482]} rotation={[1.059, 1.489, -1.022]} scale={0.111}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.631, 1.316, 4.955]} rotation={[-2.047, 1.483, 2.064]} scale={0.178}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.737, 1.41, -8.111]} rotation={[-1.305, 1.422, 1.281]} scale={0.159}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[3.099, 1.4, 4.632]} rotation={[2.622, 1.526, -2.666]} scale={0.118}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[3.312, 1.238, 2.892]} rotation={[-1.391, 1.524, 1.402]} scale={0.124}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[3.377, 0.267, 0.067]} rotation={[-1.041, 1.507, 1.102]} scale={0.143}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[3.541, 1.709, -7.763]} rotation={[1.13, 1.506, -1.14]} scale={0.241}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[4.057, 1.299, 2.863]} rotation={[-1.623, 1.413, 1.635]} scale={0.107}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[4.373, 2.314, -8.758]} rotation={[-1.708, 1.361, 1.749]} scale={0.168}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[4.793, 0.698, -0.482]} rotation={[2.219, 1.539, -2.266]} scale={0.205}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[4.905, 0.952, -3.187]} rotation={[1.419, 1.511, -1.416]} scale={0.16}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[5.47, 1.049, -2.984]} rotation={[2.192, 1.485, -2.236]} scale={0.147}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[5.432, 1.367, 7.752]} rotation={[1.911, 1.416, -1.928]} scale={0.14}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[5.844, 0.991, -1.028]} rotation={[1.692, 1.488, -1.689]} scale={0.146}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[6.052, 1.392, 7.61]} rotation={[1.514, 1.424, -1.517]} scale={0.105}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[6.697, 1.019, -3.374]} rotation={[1.834, 1.555, -1.826]} scale={0.132}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[6.879, 1.024, -0.609]} rotation={[1.396, 1.456, -1.406]} scale={0.149}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[7.317, 0.853, -2.456]} rotation={[-1.593, 1.462, 1.614]} scale={0.104}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[7.502, 0.737, -4.653]} rotation={[0.898, 1.487, -0.915]} scale={0.105}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[8.494, 1.115, 3.003]} rotation={[1.752, 1.484, -1.703]} scale={0.061}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[8.579, 0.918, 1.012]} rotation={[-1.606, 1.397, 1.577]} scale={0.142}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[9.055, 1.007, 3.593]} rotation={[-1.73, 1.537, 1.738]} scale={0.113}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-8.416, 1.148, 6.217]} rotation={[-1.489, 1.387, 1.539]} scale={0.137}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-7.87, 1.175, 7.393]} rotation={[-2.06, 1.454, 2.104]} scale={0.133}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-7.74, 1.319, -0.513]} rotation={[1.425, 1.478, -1.46]} scale={0.184}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-7.535, 2.889, -4.811]} rotation={[-1.681, 1.434, 1.669]} scale={0.169}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-7.042, 1.147, 7.217]} rotation={[-1.411, 1.44, 1.447]} scale={0.181}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-7.083, 1.149, 1.99]} rotation={[1.523, 1.528, -1.564]} scale={0.154}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-6.859, 1.154, 0.621]} rotation={[-1.554, 1.365, 1.557]} scale={0.142}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-6.455, 1.149, 3.112]} rotation={[1.825, 1.493, -1.79]} scale={0.116}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-5.802, 1.149, 5.718]} rotation={[-1.745, 1.39, 1.798]} scale={0.125}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-5.214, 0.263, 0.856]} rotation={[-1.746, 1.364, 1.806]} scale={0.131}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-4.861, 1.161, 6.498]} rotation={[1.616, 1.543, -1.651]} scale={0.127}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-4.783, 0.261, 4.121]} rotation={[-1.474, 1.479, 1.479]} scale={0.088}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-4.524, 0.195, -1.997]} rotation={[-0.687, 1.537, 0.733]} scale={0.192}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-4.142, 0.136, 0.439]} rotation={[0.946, 1.504, -0.963]} scale={0.093}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-3.722, 0.229, -4.963]} rotation={[-1.712, 1.499, 1.709]} scale={0.219}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-2.051, 0.204, -3.958]} rotation={[2.239, 1.553, -2.197]} scale={0.125}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-1.307, 0.177, -4.197]} rotation={[1.938, 1.501, -1.906]} scale={0.114}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-0.94, 1.741, -7.893]} rotation={[-1.554, 1.446, 1.527]} scale={0.111}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-0.725, 0.12, -2.034]} rotation={[-1.642, 1.34, 1.638]} scale={0.112}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-0.533, 1.643, -7.815]} rotation={[-2.424, 1.491, 2.383]} scale={0.098}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[-0.105, 1.618, -6.263]} rotation={[0.846, 1.538, -0.836]} scale={0.083}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[0.447, 0.17, -0.575]} rotation={[2.334, 1.499, -2.366]} scale={0.106}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[0.655, 0.204, -0.456]} rotation={[2.338, 1.486, -2.368]} scale={0.157}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[0.905, 1.354, -6.752]} rotation={[1.802, 1.49, -1.804]} scale={0.149}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[1.161, 1.333, -6.993]} rotation={[-1.505, 1.4, 1.513]} scale={0.126}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[1.187, 1.306, -6.873]} rotation={[-1.871, 1.361, 1.874]} scale={0.166}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[1.606, 1.09, 5.766]} rotation={[-1.895, 1.409, 1.848]} scale={0.103}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[1.561, 1.122, 6.184]} rotation={[2.382, 1.517, -2.373]} scale={0.143}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.187, 0.249, -1.132]} rotation={[-1.308, 1.437, 1.304]} scale={0.166}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.389, 1.257, 4.551]} rotation={[1.607, 1.496, -1.581]} scale={0.156}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.272, 1.338, -8.265]} rotation={[-0.856, 1.487, 0.816]} scale={0.189}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.459, 0.149, -2.243]} rotation={[-0.377, 1.55, 0.306]} scale={0.131}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.756, 0.252, -1.602]} rotation={[1.052, 1.478, -1.086]} scale={0.125}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.871, 0.201, -2.754]} rotation={[-1.852, 1.544, 1.838]} scale={0.198}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[2.915, 1.429, -7.574]} rotation={[-1.373, 1.475, 1.405]} scale={0.166}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[3.353, 1.246, 6.722]} rotation={[1.553, 1.415, -1.517]} scale={0.184}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[3.719, 1.248, 2.728]} rotation={[-1.589, 1.525, 1.59]} scale={0.128}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[3.89, 1.258, 7.701]} rotation={[-1.57, 1.433, 1.527]} scale={0.148}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[4.587, 1.261, 2.304]} rotation={[-2.048, 1.499, 2.017]} scale={0.12}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[4.44, 2.295, -8.156]} rotation={[1.092, 1.519, -1.066]} scale={0.147}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[5.078, 1.263, 2.032]} rotation={[-2.042, 1.508, 2.008]} scale={0.104}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[5.178, 1.032, -4.11]} rotation={[-1.387, 1.355, 1.406]} scale={0.123}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[5.537, 1.098, -2.778]} rotation={[2.758, 1.535, -2.782]} scale={0.125}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[5.673, 1.382, 7.947]} rotation={[1.484, 1.533, -1.457]} scale={0.184}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[6.141, 1.075, -0.689]} rotation={[-1.727, 1.409, 1.681]} scale={0.278}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[6.899, 1.273, 2.282]} rotation={[-1.434, 1.537, 1.436]} scale={0.123}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[6.923, 0.982, -2.639]} rotation={[1.367, 1.532, -1.322]} scale={0.104}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[6.776, 0.762, -6.782]} rotation={[1.49, 1.488, -1.521]} scale={0.159}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[7.072, 0.617, -6.661]} rotation={[2.11, 1.46, -2.12]} scale={0.099}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[8.187, 0.938, 1.187]} rotation={[-1.779, 1.512, 1.769]} scale={0.136}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[8.26, 1.225, 4.583]} rotation={[1.334, 1.439, -1.326]} scale={0.117}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <group position={[9.088, 0.915, 1.642]} rotation={[1.559, 1.464, -1.533]} scale={0.118}>
        <instances.Tree />
        <instances.Tree1 />
        <instances.Tree2 />
      </group>
      <instances.Arch position={[0, 1.488, -6.757]} rotation={[0, -0.28, 0]} scale={0.11} />
      <instances.BigStone position={[1.583, 1.195, -5.551]} scale={[0.143, 0.403, 0.216]} />
      <instances.BigStone1
        position={[2.658, 1.336, -6.743]}
        rotation={[Math.PI, -0.277, Math.PI]}
        scale={[0.143, 0.403, 0.216]}
      />
      <instances.CloudBig position={[3.683, 4.925, -9.104]} rotation={[0, 0.56, 0]} scale={0.534} />
      <instances.CloudBig1 position={[-9.643, 7.338, 3.059]} rotation={[-Math.PI, 0.937, -Math.PI]} scale={0.771} />
      <instances.CloudBig2
        position={[-7.075, 7.241, -9.104]}
        rotation={[Math.PI, -1.085, Math.PI]}
        scale={[0.382, 0.534, 0.48]}
      />
      <instances.CloudBig3 position={[-22.362, 3.888, -11.208]} rotation={[0.052, 0.666, 0.168]} scale={0.853} />
      <instances.CloudSmall position={[-9.023, 6.611, -5.513]} rotation={[-Math.PI, 1.118, -Math.PI]} scale={0.287} />
      <instances.CloudSmall1 position={[5.096, 4.753, -10.166]} scale={0.353} />
      <instances.Harbor position={[9.121, 0.12, -1.451]} rotation={[0, 1.565, 0]} />
      <group position={[3.742, 1.455, -5.493]} rotation={[0, -0.813, -Math.PI / 2]} scale={0.061}>
        <instances.Flag />
        <instances.Flag1 />
      </group>
      <group position={[-5.054, 1.005, 7.425]} rotation={[0, -0.813, -Math.PI / 2]} scale={0.061}>
        <instances.Flag2 />
        <instances.Flag3 />
      </group>
      <group position={[6.849, 1.543, 5.809]} rotation={[0, -0.813, -Math.PI / 2]} scale={0.061}>
        <instances.Flag4 />
        <instances.Flag5 />
      </group>
      <instances.SmallStone position={[2.457, 1.223, -6.476]} scale={[0.351, 0.243, 0.351]} />
      <instances.SmallStone1 position={[-3.342, 0.188, 3.037]} scale={[0.351, 0.553, 0.351]} />
      <instances.SmallStone2
        position={[3.436, 1.064, -3.929]}
        rotation={[0, -1.534, 0]}
        scale={[0.286, 0.198, 0.286]}
      />
      <instances.Fence
        position={[-4.395, 2.853, -5.591]}
        rotation={[0.197, 0.822, -0.149]}
        scale={[0.431, 0.232, 0.297]}
      />
      <instances.Fence1
        position={[-4.755, 2.841, -5.204]}
        rotation={[0.197, 0.822, -0.149]}
        scale={[0.296, 0.232, 0.296]}
      />
      <instances.Fence2
        position={[-5.179, 2.853, -4.904]}
        rotation={[0.154, 0.517, -0.08]}
        scale={[0.431, 0.232, 0.297]}
      />
      <instances.Fence3
        position={[6.15, 2.209, -8.503]}
        rotation={[2.652, 1.027, -2.589]}
        scale={[0.431, 0.232, 0.297]}
      />
      <instances.Fence4
        position={[4.921, 2.321, -8.8]}
        rotation={[-0.033, 0.068, -0.002]}
        scale={[0.296, 0.232, 0.296]}
      />
      <instances.Fence5
        position={[4.427, 2.321, -8.765]}
        rotation={[-0.033, 0.068, -0.002]}
        scale={[0.384, 0.232, 0.297]}
      />
      <instances.Fence6
        position={[-5.595, 2.87, -4.597]}
        rotation={[0.197, 0.822, -0.149]}
        scale={[0.296, 0.232, 0.296]}
      />
      <instances.Fence7
        position={[-8.354, 1.136, 6.762]}
        rotation={[0.209, -0.876, 0.158]}
        scale={[0.431, 0.232, 0.297]}
      />
      <instances.Fence8 position={[-4.257, 1.114, 7.082]} rotation={[0, 1.255, 0]} scale={[0.296, 0.232, 0.296]} />
      <instances.Fence9 position={[-5.425, 0.326, 0.792]} rotation={[0, 0, -0.412]} scale={[0.296, 0.232, 0.296]} />
      <instances.Fence10
        position={[-5.849, 0.566, 0.878]}
        rotation={[0, 0.313, -0.553]}
        scale={[0.341, 0.239, 0.296]}
      />
      <instances.Fence11
        position={[-6.217, 0.824, 1.085]}
        rotation={[0.141, 0.601, -0.649]}
        scale={[0.341, 0.239, 0.296]}
      />
      <instances.Fence12
        position={[8.841, 0.274, -3.419]}
        rotation={[0.348, 1.101, -0.214]}
        scale={[0.296, 0.232, 0.296]}
      />
      <instances.Fence13
        position={[8.957, 0.306, -3.827]}
        rotation={[1.359, 1.434, -1.361]}
        scale={[0.296, 0.232, 0.296]}
      />
      <instances.Fence14
        position={[8.978, 0.318, -4.356]}
        rotation={[1.359, 1.434, -1.361]}
        scale={[0.431, 0.232, 0.297]}
      />
      <group position={[-2.163, 0.127, -2.732]} rotation={[0, -1.571, 0]} scale={0.765}>
        <instances.House />
        <instances.House1 />
        <instances.House2 />
        <instances.House3 />
        <instances.House4 />
      </group>
      <group position={[-3.257, 0.127, 0.127]} rotation={[0, -0.549, 0]} scale={0.765}>
        <instances.House5 />
        <instances.House6 />
        <instances.House7 />
        <instances.House8 />
        <instances.House9 />
      </group>
      <group position={[-2.048, 0.192, 4.932]} rotation={[Math.PI, -0.606, Math.PI]} scale={0.453}>
        <instances.House10 />
        <instances.House11 />
        <instances.House12 />
        <instances.House13 />
        <instances.House14 />
      </group>
      <group position={[-2.744, 0.127, 6.43]} scale={0.13}>
        <instances.Umbtrella />
        <instances.Umbtrella1 />
      </group>
      <group position={[-2.476, 0.127, 6.16]} scale={0.13}>
        <instances.Umbtrella2 />
        <instances.Umbtrella3 />
      </group>
      <group position={[-1.49, 0.127, 6.305]} rotation={[-1.144, 0.713, 0.479]} scale={0.13}>
        <instances.Umbtrella4 />
        <instances.Umbtrella5 />
      </group>
      <instances.ElectricTurbine position={[-8.192, 1.079, 5.633]} rotation={[0, 0.313, 0]} scale={0.035}>
        <instances.Efan />
      </instances.ElectricTurbine>
      <instances.ElectricTurbine1 position={[-1.786, 2.611, -8.817]} rotation={[0, -1.247, 0]} scale={0.035}>
        <instances.Efan1 />
      </instances.ElectricTurbine1>
      <instances.ElectricTurbine2 position={[-3.731, 3.661, -8.786]} rotation={[0, -0.513, 0]} scale={0.035}>
        <instances.Efan2 />
      </instances.ElectricTurbine2>
      <instances.Bridge scale={-0.348} />
      <instances.Ocean position={[0, 0.04, 0]} scale={23.341} />
      <instances.Zoomland position={[-8.516, 6.093, -7.628]} rotation={[Math.PI / 2, 0, -0.918]} />
      <instances.Land position={[0, 0.047, 0]} />
      <group position={[4.812, 1.498, 4.961]} rotation={[Math.PI, -1.34, Math.PI]} scale={0.624}>
        <instances.House15 />
        <instances.House16 />
        <instances.House17 />
        <instances.House18 />
        <instances.House19 />
      </group>
      <group position={[-2.809, 4.049, 4.1]} scale={0.372}>
        <instances.Balloon />
        <instances.Balloon1 />
        <instances.Balloon2 />
      </group>
      <group position={[-3.042, 0.158, 5.355]} rotation={[-Math.PI, 0.509, -Math.PI]} scale={0.012}>
        <instances.LifeguardTower />
        <instances.LifeguardTower1 />
      </group>
      <group position={[5.515, 2.055, -8.556]} scale={0.714}>
        <instances.LightTower />
        <instances.LightTower1 />
        <instances.LightTower2 />
        <instances.LightTower3 />
      </group>
      <group position={[-6.301, 1.102, 6.515]} rotation={[-Math.PI, 0.509, -Math.PI]} scale={0.032}>
        <instances.Radar />
        <instances.Radar1 />
      </group>
      <group position={[0.93, 1.695, 6.333]} rotation={[Math.PI / 2, 0, 0]} scale={0.041}>
        <instances.WindCatcher />
        <instances.WindCatcher1 />
        <instances.WindCatcher2 />
        <instances.Stick position={[0, 0, 15.265]} rotation={[0, 0.919, Math.PI]} scale={[2.125, 1.244, 0.064]} />
      </group>
      <group position={[-0.578, 7.162, -9.399]} scale={0.169}>
        <instances.Airship />
        <instances.Airship1 />
        <instances.Airship2 />
        <instances.Airship3 />
        <instances.Airship4 />
        <instances.Airship5 />
        <instances.Fan position={[-8.366, 0, 0]} />
      </group>
      <instances.Antenna position={[-2.329, 0.089, -0.952]} scale={0.262} />
      <group position={[-7.131, 1.13, 3.481]} scale={0.033}>
        <instances.Ufo />
        <instances.Ufo1 />
      </group>
      <group position={[-5.817, 2.883, -5.957]} rotation={[0, 0.969, 0]} scale={0.034}>
        <instances.Windmill />
        <instances.Windmill1 />
        <instances.Windmill2 />
        <instances.Windmill3 />
        <group position={[0, 35.429, 13.85]}>
          <instances.SpinPart />
          <instances.SpinPart1 />
          <instances.SpinPart2 />
        </group>
        <instances.WindmillProtal />
        <instances.WindmillProtal1 />
        <instances.WindmillProtal2 />
        <instances.WindmillProtal3 />
        <instances.WindmillProtal4 />
      </group>
      <group position={[3.079, 1.491, 7.852]} rotation={[-Math.PI, 0.545, -Math.PI]} scale={0.054}>
        <instances.Banjo />
        <instances.Banjo1 />
        <instances.Banjo2 />
        <instances.Banjo3 />
        <instances.Banjo4 />
      </group>
      <group position={[-0.968, 0.149, 0.043]} rotation={[0, -0.325, -Math.PI / 2]} scale={0.341}>
        <instances.Cinema />
        <instances.Cinema1 />
        <instances.Cinema2 />
        <instances.Cinema3 />
        <instances.Cinema4 />
      </group>
      <group position={[4.863, 1.577, -5.727]} rotation={[0, -1.495, 0]} scale={0.119}>
        <instances.Megaphone />
        <instances.Megaphone1 />
        <instances.Megaphone2 />
      </group>
      <instances.Horse position={[6.362, 1.467, 4.295]} rotation={[Math.PI, -1.009, Math.PI]} scale={0.027} />
      <group position={[0.223, -0.486, -3.412]} scale={0.156}>
        <instances.Kite />
        <instances.Kite1 />
        <instances.Kite2 />
        <instances.Kite3 />
        <instances.Kite4 />
        <instances.Kite5 />
      </group>
      <group position={[-5.612, 0.162, -2.206]} rotation={[0, -0.219, 0]} scale={0.678}>
        <instances.BigTree />
        <instances.BigTree1 />
      </group>
      <group position={[9.768, 0.087, -0.699]} rotation={[Math.PI, 0, Math.PI]} scale={0.433}>
        <instances.Boat />
        <instances.Boat1 />
        <instances.Boat2 />
      </group>
      <group position={[0.379, -0.047, -2.922]} rotation={[Math.PI, -0.929, Math.PI]} scale={0.288}>
        <instances.Sphere />
        <instances.Sphere1 />
        <instances.Sphere2 />
      </group>
    </group>
  )
}

useGLTF.preload('/Zoomland.glb')
