
<h1 align="center">
    Shimmer Placeholder Exemplo
</h1>
<p align="center">Utilizando a bliblioteca do Shimmer Placeholder com o Expo para criar o esqueleto da aplicação</p>


<br/>

## Instalando o shimmer-placeholder

Para utilizaar o Shimmer com o Expo será necessário instalar o Linear Gradient

```bash
expo install expo-linear-gradient
```

Instalar o shimmer

```bash
yarn add react-native-shimmer-placeholder
```
<br/>

## Utilizando

```javascript
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)


<ShimmerPlaceHolder
  autoRun={true}
  visible={showTime}
  style={{...styles.image, marginTop: 50}}
>
  <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/44972197?v=4' }} />
</ShimmerPlaceHolder>
```

