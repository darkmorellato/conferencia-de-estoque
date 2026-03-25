// Firebase configuration - loaded from config.js
var db = null;
var firebaseInitialized = false;

function initFirebase() {
  if (firebaseInitialized) return db;
  if (typeof firebase !== 'undefined' && typeof FIREBASE_CONFIG !== 'undefined') {
    firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.firestore();
    firebaseInitialized = true;
    return db;
  }
  return null;
}

// Save inventory to Firestore
async function saveToFirestore(store, month, inventory) {
  if (!db) initFirebase();
  if (!db) return { success: false, error: 'Firebase not initialized' };
  
  try {
    var docRef = await db.collection('inventarios').add({
      loja: store,
      mes: month,
      data: inventory,
      criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// Get all saved inventories
async function getSavedInventories() {
  if (!db) initFirebase();
  if (!db) return [];
  
  try {
    var snapshot = await db.collection('inventarios').orderBy('criadoEm', 'desc').get();
    var results = [];
    snapshot.forEach(function(doc) {
      var data = doc.data();
      results.push({
        id: doc.id,
        loja: data.loja,
        mes: data.mes,
        data: data.data,
        criadoEm: data.criadoEm
      });
    });
    return results;
  } catch (e) {
    console.error('Error getting inventories:', e);
    return [];
  }
}
